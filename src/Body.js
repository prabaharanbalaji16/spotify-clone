import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import SongRow from './SongRow';
function Body() {
    const [{discover_weekly},] = useDataLayerValue();
    console.log(discover_weekly);
    return (
        <div className="body">
            <Header />

            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>  
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {
                    discover_weekly?.tracks.items.map((item) => (
                        <SongRow track={item.track} />
                        // console.log(item.track)
                    ))
                }
            </div>  
        </div>
    )
}

export default Body
