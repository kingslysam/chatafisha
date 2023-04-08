import bg from '../public/shutterstock-1525566017-3@2x.png'
import add from '../public/add.svg'
import mainlogo from '../public/main-logo6.svg'
import arrowup from '../public/iconsaxlineararrowup.svg'
import arrowleft from '../public/iconsaxlineararrowleft4.svg'
import join from '../public/rectangle-15@2x.png'
import waste from '../public/rectangle-151@2x.png'
import rangi from '../public/mask-group11@2x.png'
import near from '../public/near-2.svg'


const NEWSUPDATE = () => {
  return (
    <div className="relative bg-black/50 w-full h-[832px] overflow-hidden text-left text-13xl text-black font-syne">
      <img
        className="absolute top-[0px] left-[0px] w-[3111px] h-[1154px] object-cover"
        alt=""
        src={bg}
      />
      <div className="absolute top-[164px] left-[1014px] w-[207.23px] h-[210.05px] text-xl text-white">
        <div className="absolute top-[0px] left-[0px] rounded-4xl bg-black w-[207.23px] h-[210.05px]" />
        <b className="absolute top-[124.21px] left-[26.84px] inline-block w-[109.62px] h-[50.33px]">
          <p className="m-0">{`News &`}</p>
          <p className="m-0">Updates</p>
        </b>
        <img
          className="absolute top-[18.33px] left-[162.12px] w-[28.2px] h-[28.2px]"
          alt=""
          src={add}
        />
      </div>
      <div className="absolute top-[49px] left-[70px] w-[1143px] h-7 text-xs">
        <b className="absolute top-[6px] left-[40px] text-xl">CHATAFISHA</b>
        <div className="absolute top-[4px] left-[873px] font-medium inline-block w-[62px] h-5">{`Home `}</div>
        <div className="absolute top-[0px] left-[1029px] rounded-lg-5 bg-gainsboro-200 shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[104px] h-[22px]" />
        <div className="absolute top-[4px] left-[958px] font-medium inline-block w-[62px] h-5">
          Log in
        </div>
        <div className="absolute top-[3px] left-[1038px] font-medium inline-block w-[105px] h-5">
          connect wallet
        </div>
      </div>
      <img
        className="absolute h-[3.4%] w-[2.78%] top-[6.37%] right-[78.87%] bottom-[90.23%] left-[18.36%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={mainlogo}
      />
      <div className="absolute top-[456px] left-[54px] w-[1576px] overflow-hidden flex flex-col items-start justify-start text-mini text-white">
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <div className="relative w-[315px] h-[301px] shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-black w-[315px] h-[301px]" />
            <img
              className="absolute top-[0px] left-[0px] w-[315px] h-[199px] object-cover"
              alt=""
              src={join}
            />
            <div className="absolute top-[219px] left-[18px] font-extrabold">
              <p className="m-0">Join our open house</p>
              <p className="m-0">event</p>
            </div>
            <div className="absolute top-[259px] left-[18px] text-xs text-darkgray-200">
              <p className="m-0">Chatafisha will be hosting it’s second open</p>
              <p className="m-0">house event this year to share our...</p>
            </div>
            <img
              className="absolute top-[219px] left-[278px] w-6 h-6 overflow-hidden"
              alt=""
              src={arrowup}
            />
          </div>
          <div className="relative w-[315px] h-[301px] shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-black w-[315px] h-[301px]" />
            <img
              className="absolute top-[0px] left-[0px] w-[315px] h-[199px] object-cover"
              alt=""
              src={rangi}
            />
            <div className="absolute top-[211px] left-[18px] font-extrabold">
              <p className="m-0">{`Rangi Chanya `}</p>
              <p className="m-0">Festival</p>
            </div>
            <div className="absolute top-[247px] left-[18px] text-xs text-darkgray-200 whitespace-pre-wrap">
              <p className="m-0">{`Exciting news! CHATAFISHA is hosting 'RANGI `}</p>
              <p className="m-0">{`CHANYA'  to drive community impact through a `}</p>
              <p className="m-0">{`circular economy. `}</p>
            </div>
            <img
              className="absolute top-[219px] left-[278px] w-6 h-6 overflow-hidden"
              alt=""
              src={arrowup}
            />
          </div>
          <div className="relative w-[315px] h-[301px] shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-black w-[315px] h-[301px]" />
            <img
              className="absolute top-[0px] left-[0px] w-[315px] h-[199px] object-cover"
              alt=""
              src={waste}
            />
            <div className="absolute top-[219px] left-[18px] font-extrabold">
              <p className="m-0">Waste Collection</p>
              <p className="m-0">Initiative</p>
            </div>
            <div className="absolute top-[259px] left-[18px] text-xs text-darkgray-200">
              <p className="m-0">
                Chatafisha and Nipe Fagio are partnering in a
              </p>
              <p className="m-0">waste collection initiative...</p>
            </div>
            <img
              className="absolute top-[219px] left-[278px] w-6 h-6 overflow-hidden"
              alt=""
              src={arrowup}
            />
          </div>
          <div className="relative w-[315px] h-[301px] shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-black w-[315px] h-[301px]" />
            <div className="absolute top-[0px] left-[0px] bg-white w-[315px] h-[199px]" />
            <div className="absolute top-[219px] left-[18px] font-extrabold">
              <p className="m-0">Building on NEAR</p>
              <p className="m-0">Protocol</p>
            </div>
            <div className="absolute top-[259px] left-[18px] text-xs text-darkgray-200">
              <p className="m-0">As a Decentralized Autonomous Organization</p>
              <p className="m-0">(DAO), we are building our platform on...</p>
            </div>
            <img
              className="absolute top-[219px] left-[1274px] w-6 h-6 overflow-hidden"
              alt=""
              src={arrowup}
            />
            <img
              className="absolute top-[68px] left-[40px] w-[235px] h-16 overflow-hidden"
              alt=""
              src={near}
            />
          </div>
        </div>
      </div>
      <b className="absolute top-[263px] left-[138px] text-5xl inline-block w-[318px] h-[102px]">
        <p className="m-0">Get all the latest news happening around the</p>
        <p className="m-0">Chatazen community.</p>
      </b>
      <div className="absolute top-[158.32px] left-[343.33px] font-extrabold inline-block w-[232.67px] h-[40.01px] [-webkit-text-stroke:1px_#000]">{`NEWS &`}</div>
      <div className="absolute top-[188.85px] left-[304.38px] font-extrabold inline-block w-[271.62px] h-[40.01px]">
        UPDATES
      </div>
      <img
        className="absolute top-[139px] left-[184px] w-[99.64px] h-[99.64px] overflow-hidden"
        alt=""
        src={arrowleft}
      />
      <div className="absolute top-[263px] left-[548px] w-[319px] h-24 text-smi text-gray-200">
        <div className="absolute top-[48px] left-[0px]">
          <p className="m-0">
            We are a DAO working on Web3 environment. With the
          </p>
          <p className="m-0">
            pace that technology is moving, it gets overwhelming
          </p>
          <p className="m-0">
            trying to grasp everything. Here is what we’ve been upto.
          </p>
        </div>
        <div className="absolute top-[0px] left-[0px] text-base text-black whitespace-pre-wrap">
          <p className="m-0">Stay up-to-date with all the relevant tech</p>
          <p className="m-0">we use day to day.</p>
        </div>
      </div>
    </div>
  );
};

export default NEWSUPDATE;
