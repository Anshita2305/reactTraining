import { ReactElement } from "react";
import { SongProps, SongType } from "./SongType";

const Song = (props:SongProps) : ReactElement =>{

    const voteNow = () :void => props.recordVote();

    return (<li>{props.song.title} by {props.song.artist} has {props.song.votes} <button onClick={voteNow}>Vote for this song</button></li>);
}
export default Song
 //type SongProps={song:SongType,re:string};