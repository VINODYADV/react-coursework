import { ReactElement, useState } from "react";
import Song from "./Song";
import { SongType } from "./Song";
import { JsxElement, isJsxElement } from "typescript";

const SongList = ():JSX.Element => {
    const [visible,setVisible] = useState<boolean>(false);
    const  toggleVisibility = ():void => {
        setVisible(!visible);
    }
    const songList: SongType[] =[{title : 'Last thing on my mind', artist: 'steps', votes:0},
    {title : 'If you\'re over me', artist: 'Years and years', votes:0}];

    const [songs,setSongs] = useState(songList);
    // let [song1, setSong1] = useState<SongType>({title : 'Last thing on my mind', artist: 'steps', votes:0});
    // let [song2, setSong2] = useState<SongType>({title : 'If you\'re over me', artist: 'Years and years', votes:0});

    // const changeSong = () : void => {
    //     setSong1({...song1, title : 'Something in your eyes'});
    //     setSong2({...song2, title : 'King' })
    // }


    const recordVote = (id:number):void => {
debugger;
       const newSongs : SongType[] = songs.map((song,index) => {return index === id ? {...song,votes : song.votes+1} : song});
        setSongs(newSongs);
        
    }

    // const display : JSX.Element[] = songs.map((song,index) => {
    //     return <Song key={index} song={song} recordVote={ () => recordVote(index)}/>
    // });

    return (
        <div>
        <h2> Your favourite song list </h2>
       
        <ul >
            {/* <Song song={song1} recordVote={recordVote} /> */}
            {/* {display} */}
           
            {{visible} && songs.map( (song,index) => <Song song={song}  key={index} recordVote={() => recordVote(index)}/>)}
            {
            !visible && songs.filter(song => song.votes > 5).map((song,index) =>  <Song song={song}  key={index} recordVote={() => recordVote(index)}/>)
            }
            

        </ul>
        <button  onClick={toggleVisibility}>{visible ?'hide songs':'Show songs'}</button>

        </div>
    );
}


export default SongList;