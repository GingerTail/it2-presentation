import React from 'react';
import Sound from 'react-sound';
import rainEffect from "../audio/rainEffect.mp3"

export default class AudioManager extends React.Component {
  render() {
    return (

        <Sound
          url={rainEffect}
          volume={60}
          loop="true"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
  }
}