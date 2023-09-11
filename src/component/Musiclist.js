import React from 'react'
import { NavLink } from 'react-router-dom'
import firstsong from '../images/1683826361693.jpg'
import secondsong from '../images/1683831874313.jpg'
import thirdsong from '../images/1683831874324.jpg'
import fourthsong from '../images/1683831874335.jpg'
import fifthsong from '../images/1683831874347.jpg'
import sixthsong from '../images/freeverse.jpg'
import seventhsong from '../images/munkodhamki.jpg'
import eighthsong from '../images/reckless.jpg'
import ninethsong from '../images/scopebda (2).jpg'

const Musiclist = () => {
  return (
    <>
        <div className="song-list">
            <table>
                <tr>
                    <th></th>
                    <th>TITLE</th>
                    <th>TIME</th>
                    <th>BPM</th>
                    <th>TAGS</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={firstsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">NARBHAKSHI</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={secondsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">MUN KO DHAMKI</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={thirdsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">TAAR</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={fourthsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">SHY</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={fifthsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">RECKLESS</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={sixthsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">FREEVERSE</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={seventhsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">SCOPE BDA</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={eighthsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">ERADICATR</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
                <tr>
                    <td className="clm-first"><NavLink to="/"><img src={ninethsong} alt="banner" /></NavLink></td>
                    <td className="clm-second">GRAHAK</td>
                    <td className="clm-third">3:40</td>
                    <td className="clm-fourth">140</td>
                    <td className="clm-fifth"></td>
                    <td className="clm-sixth"><NavLink to="/"><ion-icon name="download-outline"></ion-icon></NavLink></td>
                    <td className="clm-seventh"><NavLink to="/"><ion-icon name="share-social-outline"></ion-icon></NavLink></td>
                    <td className="clm-eighth"><NavLink to="/"><ion-icon name="cart-outline"></ion-icon>499₹</NavLink></td>
                </tr>
            </table>
        </div>  
    </>
  )
}

export default Musiclist