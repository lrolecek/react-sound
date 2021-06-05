import React, {useState} from 'react';
import useSound from 'use-sound';

import './style.css';

const Muzika = () => {

	const [isPlaying, setIsPlaying] = useState(false);

	const [play, {stop}] = useSound('/assets/dingdingdang.mp3', {
		onend: () => {
			setIsPlaying(false);
		}
	});

	const handleClick = () => {
		if (isPlaying) {
			stop();
		} else {
			play();
		}
		setIsPlaying(!isPlaying);
	}

	return (
		<>
			<button onClick={handleClick}>
				{
					isPlaying
					? <>
							Stop
							<span className="playing">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</span>
						</>
					: 'Play'
				}
			</button>

		</>
	);
}

export default Muzika;