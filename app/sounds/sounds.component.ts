import { Component, OnInit } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';

import { Sound } from './shared/sounds.model';
import { SoundsService } from './shared/sounds.service';

@Component({
	selector: 'sounds',
  moduleId: module.id,
  templateUrl: './sounds.component.html',
	styleUrls: ['./sounds.component.css'],
})

export class SoundsComponent implements OnInit {
	sounds: Sound[] = [];

	constructor(private soundsService: SoundsService) {}

	ngOnInit() {
		this.soundsService.getSounds().
		  subscribe((sounds) => this.sounds = sounds);
	}

	public play(sound) {
    const player = new TNSPlayer();
    return player
      .initFromFile({
        audioFile: `~/audio/${sound.file}`,
        loop: false,
        completeCallback: () => player.dispose(),
      })
      .then(() => player.play())
      .catch(err => console.log(err))
	}

}
