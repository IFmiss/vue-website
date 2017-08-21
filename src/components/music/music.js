import store from '../../store'
import fecth from './../../utils/fecth.js'
const musicApi = {
    eleAudio: store.getters.getAudioEle,
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
    getMusicLrc (id, that) {
        const apiLyric = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=lyric&id=${id}`
        fecth.get(apiLyric).then((res) => {
            that.currentMusic.lyric = this.parseLrc(res.data.lrc.lyric)
            console.log(JSON.stringify(that.currentMusic))
            store.dispatch({
                type: 'set_CurrentAudio',
                data: that.currentMusic
            })
            // that.$nextTick(() => {
            //     return that.currentMusic.lyric
            // })
            // return that.currentMusic.lyric
            // console.log(JSON.stringify(res.data.result.songs))
            // this.musicInfo = res.data.result.songs
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

    // 点击播放歌曲
    clickIndex (data, that) {
        const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id=${data.id}`
        fecth.get(apiUrl).then((res) => {
            this.getMusicLrc(data.id, that)
            that.currentMusic = {
                url: res.data.data[0].url,
                duration: data.duration,
                picurl: data.pic,
                index: data.index
            }
            store.commit({
                type: 'setCurrentAudio',
                data: that.currentMusic
            })
            that.$nextTick(() => {
                store.getters.getAudioEle.load()
                store.getters.getAudioEle.play()
            })
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
