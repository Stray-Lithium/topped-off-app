import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const buttonClickSound = new Sound(
  'button_sound.wav',
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
  'bottle_pop_sound.mp3',
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
  'menu_sound.wav',
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
  'point_sound.wav',
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
  'quit_sound.wav',
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
