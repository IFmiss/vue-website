import store from '../../store'
import fecth from './../../utils/fecth.js'
const musicApi = {
    eleAudio: store.getters.getAudioEle,
    lastLyric: 0,
    lyric: {},    // 解析的歌詞
    parseLrc (lrc) {
        if (lrc === '') return ''
        const lyrics = lrc.split('\n')
        let lrcObj = {}
        for (let i = 0; i < lyrics.length; i++) {
        const lyric = decodeURIComponent(lyrics[i])
        const timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
        const timeRegExpArr = lyric.match(timeReg)
        if (!timeRegExpArr) continue
        const clause = lyric.replace(timeReg, '')
        for (let k = 0, h = timeRegExpArr.length; k < h; k++) {
        const t = timeRegExpArr[k]
        let min = Number(String(t.match(/\[\d*/i)).slice(1))
        let sec = Number(String(t.match(/\:\d*/i)).slice(1))
        const time = min * 60 + sec
        lrcObj[time] = clause
        }
        }
        return lrcObj
    },
    // 获取对应的表单歌曲
    getMusicSheet (id, that) {
        // const id = 3778678  // 云音乐热歌榜
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=playlist&id=${id}`
        fecth.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            // console.log(JSON.stringify(res.data.result.songs))
            that.musicInfo = res.data.playlist.tracks
        }, (err) => {
            console.log(err)
        })
    },

    // 获取歌词
    getMusicLrc (data, that) {
        // alert(data.id)
        // alert(JSON.stringify(that.currentMusic))
        const apiLyric = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=lyric&id=${data.id}`
        fecth.get(apiLyric).then((res) => {
            let parseLrc = {}
            if (res.data.lrc === undefined) {
                parseLrc = {'0': '纯音乐,请欣赏'}
            } else {
                parseLrc = this.parseLrc(res.data.lrc.lyric)
                this.lyric = this.parseLrc(res.data.lrc.lyric)
            }

            // 初始化最後一個lrc
            this.lastLyric = -1

            that.currentMusic = {
                url: data.url,
                duration: data.duration,
                picurl: data.picurl,
                index: data.index,
                lyric: parseLrc
            }
            store.commit({
                type: 'setCurrentAudio',
                data: that.currentMusic
            })
            that.$nextTick(() => {
                store.getters.getAudioEle.load()
                store.getters.getAudioEle.play()
            })
            this.refreshLyric(45, that, data)
        }, (err) => {
            console.log(err)
        })
    },
    // 获取音乐时长
    getMusicDurantionType (time, that) {
        const minT = Math.floor(time / 1000 / 60) >= 10 ? Math.floor(time / 1000 / 60) : '0' + Math.floor(time / 1000 / 60)
        const minS = Math.floor(time / 1000 % 60) >= 10 ? Math.floor(time / 1000 % 60) : '0' + Math.floor(time / 1000 % 60)
        return minT + ':' + minS
    },

    // 刷新進度的歌詞
    refreshLyric (time, that, data) {
        if (this.lyric === '') return false
        time = parseInt(time)  // 时间取整
        var i = 0
        for (var k in this.lyric) {
            if (k >= time) break
            i = k      // 记录上一句的
        }
        alert(time)
        this.scrollLyric(i, that, data)
    },

    // 滚动歌词到指定句
    // 参数：当前播放时间（单位：秒）
    scrollLyric (time, that, data) {
        // alert(data)
        if (this.lyric === '') return false

        time = parseInt(time)  // 时间取整

        if (this.lyric === undefined || this.lyric[time] === undefined) return false  // 当前时间点没有歌词

        if (this.lastLyric === time) return true // 歌词没发生改变

        var i = 0  // 获取当前歌词是在第几行
        that.currentMusicLrcIndex = i
        for (var k in this.lyric) {
            if (k > time) break
            i++
        }
        this.lastLyric = time  // 记录方便下次使用
        // $(".lplaying").removeClass("lplaying")     // 移除其余句子的正在播放样式
        // $(".lrc-item[data-no='" + i + "']").addClass("lplaying")    // 加上正在播放样式
        that.currentMusicLrcIndex = i
        // alert(data.lrcContent)
        // alert(data.lrcContent.childNodes[0].offsetHeight)
        alert(i)
        // var scroll = (data.lrcContent.childtNode().offsetHeight * i)
        alert(data.lrcContent.childNodes[0].offsetHeight)
        // var scroll = (that.$refs.lrcContent.children().style.height * i) - ($(".lyric").height() / 2)
        // lyricArea.stop().animate({scrollTop: scroll}, 1000)  // 平滑滚动到当前歌词位置(更改这个数值可以改变歌词滚动速度，单位：毫秒)
    },

    // 点击播放歌曲
    clickIndex (data, that) {
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id=${data.id}`
        fecth.get(apiUrl).then((res) => {
            const newData = {
                id: data.id,
                url: res.data.data[0].url,
                duration: data.duration,
                picurl: data.pic,
                musicndex: data.index,
                lrcContent: data.lrcContent
            }
            this.getMusicLrc(newData, that)
            // console.log(JSON.stringify(res.data.result.songs))
            // this.musicInfo = res.data.result.songs
        }, (err) => {
            console.log(err)
        })
    },

    // 搜索音乐
    searchMusic (word, pages, that) {
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=search&count=20&pages=${pages}&name=${word}`
        fecth.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            // console.log(JSON.stringify(res.data.result.songs))
            that.musicInfo = res.data.result.songs
        }, (err) => {
            console.log(err)
        })
    }
}

export default musicApi
