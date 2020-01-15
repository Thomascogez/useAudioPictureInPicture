import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAudioPictureInPicture } from 'useaudiopictureinpicture'
import sound1 from './assets/sounds/808s_stand_out.ogg'
import sound2 from './assets/sounds/Kicking_away.mp3'
import sound3 from './assets/sounds/Problems_away.flac'

const App = () => {
  let ref = React.createRef()
  const [playList] = useState([
    {
      name: '808\'s Stand out',
      author: 'Thomas Cogez',
      src: sound1,
      thumbnail: 'https://i1.sndcdn.com/artworks-000568527800-jirbdh-t500x500.jpg'
    },
    {
      name: 'Kicking away',
      author: 'Thomas Cogez',
      src: sound2,
      thumbnail: 'https://i1.sndcdn.com/artworks-000584266589-finyvt-t200x200.jpg'
    },
    {
      name: 'Problems away',
      author: 'Thomas Cogez',
      src: sound3,
      thumbnail: 'https://i1.sndcdn.com/avatars-000533821485-ez22ce-t500x500.jpg'
    }
  ])
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const next = () => {
    setIndex((index + 1) % playList.length)
  }
  const previous = () => {
    setIndex((index - 1 + playList.length) % playList.length)
  }

  useEffect(() => {
    console.log(isPlaying)
    if (isPlaying) {
      ReactDom.findDOMNode(ref.current).play()
    } else {
      ReactDom.findDOMNode(ref.current).pause()
    }
  }, [isPlaying])
  useEffect(() => {
    ReactDom.findDOMNode(ref.current).src = playList[index].src
    { isPipToggled && updatePip(playList[index].thumbnail) }
    ReactDom.findDOMNode(ref.current).play()
    setIsPlaying(true)
  }, [index])

  const {isPipToggled, togglePip, updatePip} = useAudioPictureInPicture(playList[index].thumbnail, () => setIsPlaying(true), () => setIsPlaying(false), previous, next)

  return (
    <div className='container'>
      <h1>React useAudioPictureInPicture</h1>
      <h3>By <a target='_blank' href='https://github.com/Thomascogez'>Thomas Cogez</a></h3>
      <img style={{ width: '200px' }} src={playList[index].thumbnail} />
      <audio onEnded={next} ref={ref}>
        <source src={playList[index].src} />
      </audio>
      <p>Now Playing : {`${playList[index].author} - ${playList[index].name}`}</p>
      <div className='player-controls'>
        <button onClick={previous}><i className='material-icons'>skip_previous</i></button>
        <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <i className='material-icons'>pause</i> : <i className='material-icons'>play_arrow</i>}</button>
        <button onClick={next}><i className='material-icons'>skip_next</i></button>
        <br />
        <button onClick={togglePip} className='btn-pip'>{isPipToggled ? 'Hide Picture In Picture Mode' : 'Toggle Audio Player in Picture In Picture Mode'}</button>
        <br />
        <a style={{fontSize: '15px'}} target='_blank' href='https://soundcloud.com/thomas-cogez'>My SoundCloud</a>
      </div>
    </div>
  )
}
export default App