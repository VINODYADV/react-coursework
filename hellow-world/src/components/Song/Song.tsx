import { ReactElement } from "react";

export type SongType = {title:string,artist:string,votes:number};
type SongProps = {song:SongType;recordVote:()=>void}
// const Greeting = (props:GreetingProps) => {
//     return (<p>Hello world from {props.name} with age {props.age}</p>);
// }


const Song = ({song,recordVote}:SongProps) => {
    return (
        <>
      <li>{song.title} by {song.artist} and votes {song.votes} <button onClick={recordVote}> vote </button></li>
   </>
    );
}


export default Song;