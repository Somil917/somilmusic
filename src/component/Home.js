import React from 'react'
import { NavLink } from 'react-router-dom'
import heroimg from '../images/Free Music Studio Illustration.png'
import piano from '../images/pngwing.com.png'
import firstsong from '../images/1683826361693.jpg'
import secondsong from '../images/1683831874313.jpg'
import thirdsong from '../images/1683831874324.jpg'
import fourthsong from '../images/1683831874335.jpg'
import fifthsong from '../images/1683831874347.jpg'
import sixthsong from '../images/freeverse.jpg'
import seventhsong from '../images/munkodhamki.jpg'
import eighthsong from '../images/reckless.jpg'
import ninethsong from '../images/scopebda (2).jpg'

const Home = () => {
  return (
    <>
      <section className="first-hero" id="top_section">
        <div className="hero-main-content">
            <div className="left-hero-content">
                <img src={piano} alt="piano" />
                <h1>Hi, I have amazing beats for you</h1>
                <NavLink to="/songlist" className="grab-btn">Explore</NavLink>
            </div>
            <div className="right-hero-section">
                <img src={heroimg} alt="heroimg" />
            </div>
        </div>
      </section>
      <section>
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
        <div className="explore">
            <NavLink to="/songlist" className="explore-btn">Explore More</NavLink>
        </div>
      </section>
      <section id="contact_page">
      <div className="main-contact-container">
          <div className="main-contact-content">
            <div className="contact-content">
              <h2>Contact</h2>
              <form action="">
                <input type="text" placeholder="Name"/><br />
                <input type="email" placeholder="Email Address"/> <br />
                <input type="password" placeholder="Password"/><br/>
                <input type="text" placeholder="Message"/><br />
                <input type="button" id="contact-submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="play-pause-container">
          <div className="play-pause-content">
            <div className="song-img">
              <ul>
                <li><a href="/"><img src={thirdsong} alt="songbanner" /></a></li>
                <li className="playpause-heading"><a href="/">Narbhakshi</a></li>
              </ul>
            </div>
            <div className="play-pause-function">
              <ul>
                <li className="loop-shuffle"><a href="/"><ion-icon name="repeat-outline"></ion-icon></a></li>
                <li className="prev-play"><a href="/"><ion-icon name="play-skip-back-outline"></ion-icon></a></li>
                <li className="play-btn"><a href="/"><ion-icon name="play-circle-outline"></ion-icon></a></li>
                <li className="prev-play"><a href="/"><ion-icon name="play-skip-forward-outline"></ion-icon></a></li>
                <li className="loop-shuffle"><a href="/"><ion-icon name="shuffle-outline"></ion-icon></a></li>
              </ul>
            </div>
            <div className="song-volume">
              <ul>
                <li><a href="/">so</a></li>
                <li><a href="/"><ion-icon name="share-social-outline"></ion-icon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer id="web_foot">
        <div className="main-footer">
          <div className="main-footer-content">
            <div className="brand-name">
              <h1>SOMIL</h1>
            </div>
            <div className="first-list">
              <ul>
                <li><a href="#top_section">Home</a></li>
                <li><NavLink to="/songlist">Tracks</NavLink></li>
              </ul>
            </div>
            <div className="second-list">
              <ul>
                <li><NavLink to="/songlist">Memberships</NavLink></li>
                <li><NavLink to="/songlist">Services</NavLink></li>
                <li><NavLink to="/songlist">Blogs</NavLink></li>
                <li><NavLink to="/songlist">About</NavLink></li>
                <li><NavLink to="/songlist">Contact</NavLink></li>
              </ul>
            </div>
            <div className="third-list">
              <ul>
                <li><NavLink to="/">Licensing Info</NavLink></li>
                <li><NavLink to="/songlist">Term of use</NavLink></li>
                <li><NavLink to="/songlist">Privacy policy</NavLink></li>
              </ul>
            </div>
            <div className="fourth-list">
              <ul className="social-media-logo">
                <li><a href="https://www.youtube.com/@somil7358/"><ion-icon name="logo-youtube"></ion-icon></a></li>
                <li><a href="https://soundcloud.com/somil-290648821"><ion-icon name="logo-soundcloud"></ion-icon></a></li>
                <li><a href="https://www.instagram.com/som__ill/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><NavLink to="/songlist"><ion-icon name="logo-facebook"></ion-icon></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home