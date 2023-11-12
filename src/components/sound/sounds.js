import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const buttonClickSound = new Sound(
  'button-sound.wav',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log(
      'duration in seconds: ' +
        buttonClickSound.getDuration() +
        'number of channels: ' +
        buttonClickSound.getNumberOfChannels(),
    );
  },
);

export const bottlePopSound = new Sound(
  'bottle-pop-sound.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log(
      'duration in seconds: ' +
        buttonClickSound.getDuration() +
        'number of channels: ' +
        buttonClickSound.getNumberOfChannels(),
    );
  },
);

export const menuSound = new Sound(
  'menu-sound.wav',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log(
      'duration in seconds: ' +
        buttonClickSound.getDuration() +
        'number of channels: ' +
        buttonClickSound.getNumberOfChannels(),
    );
  },
);

export const pointSound = new Sound(
  'point-sound.wav',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log(
      'duration in seconds: ' +
        buttonClickSound.getDuration() +
        'number of channels: ' +
        buttonClickSound.getNumberOfChannels(),
    );
  },
);

export const quitSound = new Sound(
  'quit-sound.wav',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // when loaded successfully
    console.log(
      'duration in seconds: ' +
        buttonClickSound.getDuration() +
        'number of channels: ' +
        buttonClickSound.getNumberOfChannels(),
    );
  },
);
