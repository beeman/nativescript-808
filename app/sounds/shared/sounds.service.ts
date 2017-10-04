import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

import { Sound } from './sounds.model';

@Injectable()
export class SoundsService {

  private sounds: Sound[] = [
    { name: 'Bass Drum 1', file: 'kick_3.wav' },
    { name: 'Bass Drum 2', file: 'kick_2.wav' },
    { name: 'Snare Drum 1', file: 'snare_1.wav' },
    { name: 'Snare Drum 2', file: 'snare_3.wav' },
    { name: 'Low Tom', file: 'lowtom.wav' },
    { name: 'Low Conga', file: 'low_conga.wav' },
    { name: 'Mid Tom', file: 'midtom.wav' },
    { name: 'Mid Conga', file: 'mid_conga.wav' },
    { name: 'High Tom', file: 'hitom.wav' },
    { name: 'High Conga', file: 'hi_conga.wav' },
    { name: 'Claves', file: 'clav.wav' },
    { name: 'Clap', file: 'clap.wav' },
    { name: 'Rim Snare', file: 'rim.wav' },
    { name: 'Maracas', file: 'maracas.wav' },
    { name: 'Cymbal Short', file: 'cymbal_short.wav' },
    { name: 'Cymbal Long', file: 'cymbal.wav' },
    { name: 'Open Hat Short', file: 'openhat.wav' },
    { name: 'Open Hat Long', file: 'open_hat_long.wav' },
    { name: 'Closed Hat', file: 'closed_hat.wav' },
    { name: 'Cowbell', file: 'cowbell.wav' },
  ];

  getSounds(): Observable<Sound[]> {
    return Observable.of(this.sounds)
  }

}