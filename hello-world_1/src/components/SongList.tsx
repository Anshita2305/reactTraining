import { useState } from 'react';
// import Song from './Song';
import './SongList.css'
import { SongType } from './SongType';
 import Song from './Song';

function SongList() {

    let [visible,setVisible] = useState<boolean>(false);
  //  let [song1, setSong1] = useState<SongType>({title:'first',artist:'first',votes:0});
  //  let [song2, setSong2] = useState<SongType>({title:'second',artist:'second',votes:0});

    const initialSongs : SongType[] = [
        {title : 'Last thing on my mind', artist: 'steps', votes : 0},
        {title : 'If you\'re over me', artist: 'Years and years', votes : 0},
        {title : 'Top of the world', artist: 'Carpenters', votes: 0},
        {title: 'Sometimes', artist: 'Erasure', votes : 0}
    ];

    const [songs, setSongs] = useState<SongType[]>(initialSongs);
    const [showAll, setShowAll] = useState<boolean>(true);

    function handleShowSong():void{
        setVisible(!visible);
    }

    const addVote = (id : number) : void => {
        debugger;
        const newSongs = songs.map( (song,idx) => idx === id? {...song, votes: song.votes + 1} : song);
        setSongs(newSongs);
    }

    const displaySongs : JSX.Element[] = songs.map ( (song, index) => {
         return (<Song key={index} song={song} recordVote={() => addVote(index)} />);
    });

    // const changeSong = () : void => {
    //     setSong1({...song1, title : "Something in your eyes"});
    //     setSong2({...song1, title : "King"});
    // }

    // const addVote1 = () :void => {
    //     setSong1({...song1, votes : song1.votes + 1});
    // }

    // const addVote2 = () :void => {
    //     setSong2({...song2, votes : song2.votes + 1});
    // }

    const toggleShowAll = () : void => {
        setShowAll(!showAll);
    }


    return(
        <>
        <div className="header">Hello, matt from Mumbai who is 21 years old</div>

        <h2>
            your favourite songs are :
        </h2>

        <ul style={{display:visible? "block":"none"}}>
        {showAll &&
                    songs.map((song, index) => <Song key={index} song={song} recordVote={() => addVote(index)}  />)
                }

                {!showAll &&
                    songs.filter(it => it.votes >=2).map((song, index) => <Song key={index} song={song} recordVote={() => addVote(index)}  />)
                }
        </ul>
        <h3>Currently showing {showAll ? 'all' : '2 or more rated'} songs</h3>
            <button onClick={toggleShowAll}>Show {showAll ? 'all songs' : 'only songs with 2 or more votes'}</button>
        <button onClick={handleShowSong} >{visible ?  'Hide Songs' : 'Show Songs'}</button>
        {/* <button onClick={changeSong}>Change songs</button> */}


        </>


    );

}

export default SongList;