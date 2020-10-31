import React, {Component} from 'react'
import './App.css'
import './AppMobile.css'
import images from "./images"
import {IconContext} from 'react-icons'
import {MdApps, MdEmail, MdPhone, MdVpnKey, MdWork} from "react-icons/md"
import {FaAward, FaGraduationCap, FaMedium, FaPeopleCarry, FaSkype, FaUser, FaYoutube} from "react-icons/fa"
import {GoProject, GoRepoForked} from "react-icons/go"
import moment from "moment"

export default class App extends Component {
  render() {
    return (
      <div className={'viewPort'}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    )
  }

  renderHeader = () => {
    return (
      <div className={'viewHeader'}>
        <img
          alt={"my avatar"}
          className={"avatar"}
          src={images.avatar}
        />

        <div className={'viewInfoHeader'}>
          <span className={'textNameHeader'}>Duy Tran Quang</span>
          <span className={'textMajorHeader'}>Mobile developer</span>
          <span className={'textMajorHeader'}>Ho Chi Minh City, Viet Nam</span>
        </div>

        <div className={'viewContact'}>
          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{color: 'white', size: "15px"}}>
                <MdEmail/>
              </IconContext.Provider>
              <a href={'mailto:tranquangduy7994@gmail.com'} target="_blank" rel="noopener noreferrer"
                 style={{'text-decoration': 'none'}}>
                <span className={'textItemContact'}>tranquangduy7994@gmail.com</span>
              </a>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{color: 'white', size: "15px"}}>
                <FaSkype/>
              </IconContext.Provider>
              <a href={'skype:live:tranquangduy7994?chat'} target="_blank" rel="noopener noreferrer"
                 style={{'text-decoration': 'none'}}>
                <span className={'textItemContact'}>live:tranquangduy7994</span>
              </a>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{color: 'white', size: "15px"}}>
                <MdPhone/>
              </IconContext.Provider>
              <span className={'textItemContact'}>Not available</span>
            </div>
          </div>

          <div className={'viewWrapItemContact'}>
            <div className={'btnItemContact'}>
              <IconContext.Provider value={{color: 'white', size: "15px"}}>
                <FaYoutube/>
              </IconContext.Provider>
              <a href={'https://www.youtube.com/channel/UCm1P4sXurpe5u4_V_FDokiQ?view_as=subscriber'}
                 target="_blank" rel="noopener noreferrer" style={{'text-decoration': 'none'}}>
                <span className={'textItemContact'}>My channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };

  renderBody = () => {
    let a = moment();
    let b = moment([2017, 3, 1]);

    let years = a.diff(b, 'year');
    b.add(years, 'years');

    let months = a.diff(b, 'months');
    b.add(months, 'months');

    return (
      <div className={'viewBody'}>
        {/*Career Profile*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <FaUser/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Career Profile</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
                        <span
                          className={'textContentItemBody1'}>{`Mobile developer with ${years} years ${months} months experience. I work with React Native, Flutter and Android`}</span>
            <span className={'textContentItemBody1'}>Having ability to build the backend with common functions, full basic flow to communicate between backend and client</span>
            <span className={'textContentItemBody1'}>Learning new languages or platforms quickly with a positive attitude. Can join in all process of product development from initialize to store release
                        </span>
          </div>
        </div>

        <div className={'breakLine'}/>

        {/*Work Experience*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <MdWork/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Experience</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>Mobile developer at Beesight Soft</span>
            <span className={'textContentItemBody2'}>March 2017 - November 2018</span>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody'}>Mobile developer at Pharmacity</span>
            <span className={'textContentItemBody2'}>December 2018 - February 2020</span>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody'}>Mobile developer at TIKI</span>
            <span className={'textContentItemBody2'}>March 2020 - Present</span>
          </div>
        </div>

        <div className={'breakLine'}/>

        {/*My product*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <MdApps/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>My Product</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>My own product with Full-Stack operations</span>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody'}>Moga</span>
            <a className={'textContentItemBody1'} href={'https://moga-app.web.app'}
               target="_blank" rel="noopener noreferrer">https://moga-app.web.app</a>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody'}>Nubo</span>
            <a className={'textContentItemBody1'} href={'https://nubo-app.web.app'}
               target="_blank" rel="noopener noreferrer">https://nubo-app.web.app</a>
          </div>
        </div>

        <div className={'breakLine'}/>

        {/*Repository*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <GoRepoForked/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Repository</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>Github</span>
            <a className={'textContentItemBody1'} href={'https://github.com/duytq94'}
               target="_blank" rel="noopener noreferrer">https://github.com/duytq94</a>

            <div style={{height: '10px'}}/>

            <span className={'textContentItemBody'}>Dart packages</span>
            <a className={'textContentItemBody1'} href={'https://pub.dartlang.org/packages/intro_slider'}
               target="_blank" rel="noopener noreferrer">https://pub.dartlang.org/packages/intro_slider</a>

            <div style={{height: '10px'}}/>

            <span className={'textContentItemBody'}>NPM</span>
            <a className={'textContentItemBody1'}
               href={'https://www.npmjs.com/package/react-native-honeywell-barcode-reader'}
               target="_blank"
               rel="noopener noreferrer">https://www.npmjs.com/package/react-native-honeywell-barcode-reader</a>
          </div>
        </div>

        <div className={'breakLine'}/>

        {/*Article*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <FaMedium/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Article</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>Medium</span>
            <a className={'textContentItemBody1'} href={'https://medium.com/@duytq94'}
               target="_blank" rel="noopener noreferrer">https://medium.com/@duytq94</a>
          </div>
        </div>

        <div className={'breakLine'}/>

        {/*Key Skills*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <MdVpnKey/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Key Skills</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>Flutter</span>
            <span className={'textContentItemBody1'}>React Native</span>
            <span className={'textContentItemBody1'}>ReactJS</span>
            <span className={'textContentItemBody1'}>Android</span>
            <span className={'textContentItemBody1'}>Backend</span>
            <span className={'textContentItemBody1'}>Unity3D</span>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody1'}>NodeJS (Auth, RESTful API, SocketIO)</span>
            <span className={'textContentItemBody1'}>AWS (DynamoDB, Lambda function, API Gateway, Cloud Watch, Cloud Formation, Cognito, S3, Lightsail), AWS Amplify</span>
            <span
              className={'textContentItemBody1'}>Firebase (Authentication, Database, Functions, Storage, Hosting, Cloud Messaging)</span>
            <span className={'textContentItemBody1'}>Database client (Realm, PouchDB, CouchDB)</span>
            <span className={'textContentItemBody1'}>App center, OneSignal, GraphQL, Relay, Webpack, ElectronJS...</span>
          </div>
        </div>

        {/*Project*/}
        <div className={'breakLine'}/>

        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <GoProject/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Projects</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>React Native</span>
            <div className={'viewWrapChildContent'}>
              <span className={'textContentItemBody1'}>&#9679; MatchMe (outsourcing, contribution rate 80%) - The app to connect and join an activity with another person (DynamoDB, Lambda function, Map, Sendbird...)</span>
              <span className={'textContentItemBody1'}>&#9679; BitAds (small product, contribution rate 100%) - The app to post, view digital cash market (Apollo GraphQL...)</span>
              <span className={'textContentItemBody1'}>&#9679; MSS (outsourcing, contribution rate 100%) - The app to control, handle the staff, the job in the company (Redux, OneSignal...)</span>
              <span className={'textContentItemBody1'}>&#9679; PmcAudit (internal app, contribution rate 100%) - The app to audit products in store by scanning barcode with Honeywell devices (Handle big local data, synchronized, processing barcode input,...)</span>
              <span className={'textContentItemBody1'}>&#9679; PmcMedia (internal app, contribution rate 100%) - The app runs on android boxes to display promotional videos on television screens at Pharmacity chain stores (Live sync video, can work without network connection)</span>
              <span className={'textContentItemBody1'}>&#9679; PmcPOS (internal app, contribution rate 20%) - The app for store staff when out of stock can order online for delivery to customers from other warehouses</span>
              <span className={'textContentItemBody1'}>&#9679; PmcEmployee (internal app, contribution rate 30%) - The app for internal activities in the company help employee track working time, view revenue, QA/QC, report,...</span>
            </div>

            <div style={{height: '10px'}}/>

            <span className={'textContentItemBody'}>Android</span>
            <div className={'viewWrapChildContent'}>
              <span className={'textContentItemBody1'}>&#9679; Tiki - checkout flow & my profile</span>
              <span className={'textContentItemBody1'}>&#9679; Tacko (outsourcing, contribution rate 20%) - The app to buy and sell handle products when you travel</span>
              <span className={'textContentItemBody1'}>&#9679; FeedMe (outsourcing, contribution rate 20%) - The app to sell and buy food</span>
            </div>

            <div style={{height: '10px'}}/>

            <span className={'textContentItemBody'}>Flutter</span>
            <div className={'viewWrapChildContent'}>
              <span className={'textContentItemBody1'}>&#9679; Flutter integration - Add Flutter to Tiki native app as a module</span>
              <span className={'textContentItemBody1'}>&#9679; Some demo in my Github</span>
              <span className={'textContentItemBody1'}>&#9679; DailyPrayer (freelancing, contribution rate 100%) - The app to make plan a for your prayers (Firebase, Chat, Reminder, Notification...)</span>
            </div>
          </div>
        </div>

        <div className={'breakLine'}/>
        {/*Education*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <FaGraduationCap/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Education</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody'}>University of Information Technology (UIT)</span>
            <span className={'textContentItemBody2'}>2013 - 2018</span>
            <div style={{height: '10px'}}/>
            <span className={'textContentItemBody1'}>Very good graduation</span>
            <span className={'textContentItemBody1'}>Top graduate (1st)</span>
          </div>
        </div>

        <div className={'breakLine'}/>
        {/*Awards*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <FaAward/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Awards</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>Full UIT Scholarship - 2014, 2015, 2016, 2017</span>
            <span className={'textContentItemBody1'}>Students of 5 merits UIT - 2013, 2014</span>
            <div style={{height: '10px'}}/>
            <a className={'textContentItemBody1'}
               href={'https://drive.google.com/drive/folders/1OXSAywqeUyCjz2YZ0pM1c4hj9qRwLreD?usp=sharing'}
               target="_blank" rel="noopener noreferrer">My certificates</a>
          </div>
        </div>

        <div className={'breakLine'}/>
        {/*Social Activities*/}
        <div className={'viewWrapItemBody'}>
          <div className={'viewWrapTitleItemBody'}>
            <IconContext.Provider value={{color: '#f99930', size: "20px"}}>
              <FaPeopleCarry/>
            </IconContext.Provider>
            <span className={'textTitleItemBody'}>Social Activities</span>
          </div>
          <div className={'viewWrapContentItemBody'}>
            <span className={'textContentItemBody1'}>Green summer - 2014</span>
            <span className={'textContentItemBody1'}>Spring volutary - 2015</span>
            <span className={'textContentItemBody1'}>Tiep suc mua thi - 2015</span>
            <span className={'textContentItemBody1'}>Hands up - 2015</span>
            <span className={'textContentItemBody1'}>…and many other activities</span>
          </div>
        </div>

        <div style={{height: '30px'}}/>
      </div>
    )
  }
}
