import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../public/shutterstock-1525566017-3@2x.png'
import mainlogo from '../public/main-logo6.svg'
import mask2  from '../public/mask-group2@2x.png'
import mask12 from '../public/mask-group1@2x.png'
import mask from '../public/mask-group@2x.png'
import arrowlt from '../public/iconsaxlineararrowleft.svg'
import vector1 from '../public/vector-1.svg'
import vector11 from '../public/vector-11.svg'
import vector12 from '../public/vector-12.svg'
import rect25 from '../public/rectangle-25.svg'
import ellipse from '../public/ellipse-50.svg'
import vector from '../public/vector.svg'
import group from '../public/group-1390.svg'
import dropdown from '../public/drop-down-menu.svg'


const FUNDBUYCREDIT = ({ onClose }) => {
  const navigate = useNavigate();

  const onIconsaxLineararrowleftClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-[1280px] h-[832px] overflow-y-auto max-w-full max-h-full overflow-auto text-left text-5xs text-black font-syne">
      <div className="absolute top-[-939px] left-[473px] text-xl text-gray-200 inline-block w-[488px]">
        <p className="m-0">
          We work around the clock, daily meetings, office hours,
        </p>
        <p className="m-0">building new partnerships, and all this movement</p>
        <p className="m-0">makes for good stories. Here are some to read.</p>
      </div>
      <img
        className="absolute top-[1px] left-[0px] w-[1377px] h-[832px] object-cover"
        alt=""
        src={bg}
      />
      <div className="absolute top-[43px] left-[79px] w-[1143px] h-[32.3px] text-xs">
        <b className="absolute top-[4px] left-[0px] text-xl">CHATAFISHA</b>
        <div className="absolute top-[4px] left-[873px] font-medium inline-block w-[62px] h-5">{`Home `}</div>
        <img
          className="absolute h-[87.62%] w-[3.11%] top-[12.38%] right-[82.98%] bottom-[0%] left-[13.91%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={mainlogo}
        />
        <div className="absolute top-[0px] left-[1029px] rounded-lg-5 bg-gainsboro-200 shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[104px] h-[22px]" />
        <div className="absolute top-[4px] left-[958px] font-medium inline-block w-[62px] h-5">
          Log in
        </div>
        <div className="absolute top-[3px] left-[1038px] font-medium inline-block w-[105px] h-5">
          connect wallet
        </div>
      </div>
      <div className="absolute top-[1730px] left-[91px] w-[358px] h-[254px] overflow-x-auto">
        <div className="absolute top-[-45px] left-[-21px] flex flex-col py-2.5 px-5 items-start justify-start">
          <div className="flex flex-row items-start justify-start gap-[31px]">
            <img
              className="relative w-[327px] h-[254px] shrink-0 object-cover"
              alt=""
              src={mask}
            />
            <img
              className="relative w-[327px] h-[254px] shrink-0 object-cover"
              alt=""
              src={mask12}
            />
            <img
              className="relative w-[327px] h-[254px] shrink-0 object-cover"
              alt=""
              src={mask2}
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[106px] left-[79px] w-[61.74px] h-[37.03px] overflow-hidden cursor-pointer"
        alt=""
        src={arrowlt}
        onClick={onIconsaxLineararrowleftClick}
      />
      <div className="absolute top-[100px] left-[164px] w-[420px] h-[66px] text-8xl-5">
        <b className="absolute top-[0px] left-[0px] inline-block w-[420px]">
          Earn carbon credit while leaving a +impact
        </b>
      </div>
      <div className="absolute top-[200px] left-[88px] shadow-[0px_14px_18px_rgba(0,_0,_0,_0.12)] w-[775px] h-[645px]">
        <div className="absolute top-[0px] left-[0px] rounded-[15.06px] bg-white w-[775px] h-[558px]" />
        <div className="absolute top-[26.28px] left-[147.48px] text-smi text-white">
          Recycler
        </div>
        <b className="absolute top-[155.28px] left-[40.48px] text-5xl text-darkgray-300">
          <p className="m-0">{`Milestones & `}</p>
          <p className="m-0">{`Deliverables `}</p>
        </b>
        <b className="absolute top-[111.28px] left-[222.48px] text-5xl">
          12.5MTsh
        </b>
        <b className="absolute top-[121.28px] left-[48.48px] text-smi text-dimgray-200">
          5,500,700Tsh
        </b>
        <div className="absolute top-[93.28px] left-[210.48px] rounded-smi-5 bg-gainsboro-200 w-[130px] h-[18px]" />
        <div className="absolute top-[90.28px] left-[42.48px] rounded-smi-5 bg-aquamarine w-[116px] h-[22px]" />
        <b className="absolute top-[94.28px] left-[221.48px] text-3xs">
          Total Project Ask
        </b>
        <b className="absolute top-[95.28px] left-[51.48px] text-3xs">
          Amount raised
        </b>
        <div className="absolute top-[223.28px] left-[43.48px] w-[297px] h-4">
          <div className="absolute top-[0px] left-[0px] w-[297px] h-4">
            <div className="absolute top-[0px] left-[0px] rounded-xs-5 bg-gainsboro-200 w-[297px] h-4" />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[161px] h-4">
            <div className="absolute top-[0px] left-[0px] rounded-xs-5 bg-aquamarine w-[161px] h-4" />
          </div>
        </div>
        <div className="absolute top-[249.28px] left-[46.48px] text-xs inline-block w-[296px] h-[60px]">
          Our goal is to collect and remove at least 10 tons of plastic waste
          through community clean-up events and outreach programs
        </div>
        <div className="absolute top-[228.28px] left-[188.48px] text-7xs text-white">
          55%
        </div>
        <div className="absolute top-[461px] left-[204px] w-[318.66px] h-[39.21px] text-sm text-white">
          <div className="absolute top-[0px] left-[0.12px] rounded-[17.5px] bg-forestgreen-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[318.54px] h-[38.18px] [transform:_rotate(0.18deg)] [transform-origin:0_0]" />
          <b className="absolute top-[13.28px] left-[98.48px] inline-block w-[142px] h-3">
            FUND PROJECT
          </b>
        </div>
        <div className="absolute top-[85px] left-[420px] w-[282.47px] flex flex-col items-start justify-start gap-[13.45px] text-[15.37px]">
          <div className="rounded-[9.61px] bg-gainsboro-300 w-[294px] flex flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="rounded-[9.61px] bg-mediumseagreen-100 flex flex-col items-start justify-start border-[1px] border-solid border-lightgreen-200">
              <div className="relative rounded-[9.61px] w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[9.61px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-mediumaquamarine-100" />
                <img
                  className="absolute top-[6.61px] left-[5.63px] w-[12.62px] h-[8.29px]"
                  alt=""
                  src={vector1}
                />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Fund Milestone 01</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-gainsboro-300 w-[294px] flex flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="rounded-[9.61px] bg-mediumseagreen-100 flex flex-col items-start justify-start border-[1px] border-solid border-lightgreen-200">
              <div className="relative rounded-[9.61px] w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[9.61px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-mediumaquamarine-100" />
                <img
                  className="absolute top-[6.61px] left-[5.63px] w-[12.62px] h-[8.29px]"
                  alt=""
                  src={vector11}
                />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Fund Milestone 02</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`First leg of the project total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-darkgray-400 w-[294px] flex flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="flex flex-col py-[1.9215686321258545px] px-0 items-start justify-start">
              <div className="relative w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[2.88px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-black" />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Fund Milestone 03</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-darkgray-400 w-[294px] flex flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="flex flex-col py-[1.9215686321258545px] px-0 items-start justify-start">
              <div className="relative w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[2.88px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-black" />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Fund Milestone 04</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-darkgray-400 w-[294px] flex flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="flex flex-col py-[1.9215686321258545px] px-0 items-start justify-start">
              <div className="relative w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[2.88px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-black" />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Fund Milestone 05</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-gainsboro-300 w-[294px] hidden flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="rounded-[9.61px] bg-mediumseagreen-100 flex flex-col items-start justify-start border-[1px] border-solid border-lightgreen-200">
              <div className="relative rounded-[9.61px] w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[9.61px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-mediumaquamarine-100" />
                <img
                  className="absolute top-[7.69px] left-[6.73px] w-[10.57px] h-[5.76px]"
                  alt=""
                  src={vector12}
                />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Milestone 01</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-[9.61px] bg-gainsboro-300 w-[294px] hidden flex-row pt-[11.529411315917969px] pb-[7.686274528503418px] pr-0 pl-[17.294116973876953px] box-border items-start justify-start gap-[11.53px]">
            <div className="rounded-[9.61px] bg-mediumseagreen-100 flex flex-col items-start justify-start border-[1px] border-solid border-lightgreen-200">
              <div className="relative rounded-[9.61px] w-[23.06px] h-[21.14px] shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-[9.61px] box-border w-[23.06px] h-[21.14px] border-[1.9px] border-solid border-mediumaquamarine-100" />
                <img
                  className="absolute top-[7.69px] left-[6.73px] w-[10.57px] h-[5.76px]"
                  alt=""
                  src={vector12}
                />
              </div>
            </div>
            <div className="flex-1 relative whitespace-pre-wrap">
              <p className="m-0 font-medium">Milestone 01</p>
              <p className="m-0 text-[7.69px]">
                <span>
                  <span>{`Genesis total initial ask  `}</span>
                  <b className="font-syne">2,500,000Tsh</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[377px] left-[426px] w-[274px] h-[34.93px] text-[9.31px]">
          <img
            className="absolute top-[0px] left-[-3.1px] rounded-[17.85px] w-[280.21px] h-[41.14px]"
            alt=""
            src={rect25}
          />
          <b className="absolute top-[12.42px] left-[92.37px] inline-block w-[119.54px] h-[10.09px]">
            See deliverables
          </b>
          <img
            className="absolute top-[7.76px] left-[225.1px] w-[17.08px] h-[17.08px]"
            alt=""
            src={ellipse}
          />
          <img
            className="absolute h-[25.08%] w-[3.2%] top-[33.81%] right-[13.38%] bottom-[41.11%] left-[83.43%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={vector}
          />
        </div>
        <div className="absolute top-[613px] left-[304px] w-[41px] h-8 overflow-hidden" />
        <b className="absolute top-[316px] left-[272px] text-2xs inline-block text-forestgreen-100 w-[73px] h-3.5">
          OUR GOAL
        </b>
        <div className="absolute top-[349px] left-[125px] rounded-smi bg-forestgreen-300 w-[58px] h-4" />
        <div className="absolute top-[349px] left-[198px] rounded-smi bg-mediumslateblue w-[53px] h-[17px]" />
        <div className="absolute top-[350px] left-[56px] rounded-smi bg-gainsboro-200 w-[54px] h-4" />
        <div className="absolute top-[352px] left-[66px]">secured</div>
        <div className="absolute top-[352px] left-[138px] text-white">
          verified
        </div>
        <div className="absolute top-[352px] left-[206px] text-white">
          Processed
        </div>
        <img
          className="absolute h-[6.1%] w-[10.02%] top-[51.54%] right-[55.66%] bottom-[42.36%] left-[34.32%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-1390.svg"
        />
        <b className="absolute top-[336px] left-[65px]">530KG</b>
        <b className="absolute top-[336px] left-[137px]">430KG</b>
        <b className="absolute top-[337px] left-[209px]">830KG</b>
      </div>
      <div className="absolute top-[205px] left-[886px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[363px] h-[593px]">
        <div className="absolute top-[0px] left-[0px] rounded-[18px] bg-white w-[363px] h-[593px]" />
        <b className="absolute top-[190px] left-[253px] text-2xs inline-block text-forestgreen-100 w-[73px] h-3.5">
          OUR GOAL
        </b>
        <div className="absolute top-[223px] left-[106px] rounded-smi bg-forestgreen-300 w-[58px] h-4" />
        <div className="absolute top-[223px] left-[179px] rounded-smi bg-mediumslateblue w-[53px] h-[17px]" />
        <div className="absolute top-[226px] left-[119px] text-white">
          verified
        </div>
        <div className="absolute top-[226px] left-[187px] text-white">
          Processed
        </div>
        <img
          className="absolute h-[6.64%] w-[21.4%] top-[34.81%] right-[10.56%] bottom-[58.55%] left-[68.04%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={group}
        />
        <b className="absolute top-[210px] left-[118px]">430KG</b>
        <b className="absolute top-[211px] left-[190px]">830KG</b>
        <b className="absolute top-[29px] left-[38px] text-5xl text-darkgray-300">
          <p className="m-0">{`Milestones & `}</p>
          <p className="m-0">{`Deliverables `}</p>
        </b>
        <div className="absolute top-[105px] left-[31px] w-[297px] h-4">
          <div className="absolute top-[0px] left-[0px] w-[297px] h-4">
            <div className="absolute top-[0px] left-[0px] rounded-xs-5 bg-gainsboro-200 w-[297px] h-4" />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[161px] h-4">
            <div className="absolute top-[0px] left-[0px] rounded-xs-5 bg-aquamarine w-[161px] h-4" />
          </div>
        </div>
        <div className="absolute top-[139px] left-[40px] text-xs inline-block w-[296px] h-[60px]">
          Our goal is to collect and remove at least 10 tons of plastic waste
          through community clean-up events and outreach programs
        </div>
        <div className="absolute top-[183px] left-[181px] text-7xs text-white">
          55%
        </div>
        <div className="absolute top-[311px] left-[32px] w-[309px] h-60 text-sm">
          <b className="absolute top-[0%] left-[0.65%] text-base">
            MIlestone 01
          </b>
          <div className="absolute top-[9.17%] left-[0.65%] text-xs">
            Genesis Launch of our projects loren ipmsum
          </div>
          <div className="absolute top-[26.67%] left-[0.65%] font-medium">
            Key performance indicators
          </div>
          <div className="absolute top-[46.67%] left-[0.32%] font-medium">
            Key performance indicators
          </div>
          <div className="absolute top-[67.92%] left-[0.32%] font-medium">
            Key performance indicators
          </div>
          <div className="absolute top-[87.5%] left-[0.65%] font-medium">
            Key performance indicators
          </div>
          <div className="absolute h-[0.21%] w-[99.19%] top-[39.06%] right-[0.89%] bottom-[60.73%] left-[-0.08%] box-border border-t-[0.5px] border-solid border-black" />
          <div className="absolute h-[0.21%] w-[99.19%] top-[61.98%] right-[0.89%] bottom-[37.81%] left-[-0.08%] box-border border-t-[0.5px] border-solid border-black" />
          <div className="absolute h-[0.21%] w-[99.19%] top-[80.31%] right-[0.24%] bottom-[19.48%] left-[0.57%] box-border border-t-[0.5px] border-solid border-black" />
          <div className="absolute h-[0.21%] w-[99.19%] top-[99.9%] right-[-0.08%] bottom-[-0.1%] left-[0.89%] box-border border-t-[0.5px] border-solid border-black" />
          <img
            className="absolute h-[65.97%] w-[6.9%] top-[28.28%] right-[10.95%] bottom-[5.75%] left-[82.15%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dropdown}
          />
        </div>
      </div>
      <div className="absolute top-[428px] left-[926px] rounded-smi bg-gainsboro-200 w-[54px] h-4" />
      <div className="absolute top-[430px] left-[936px]">secured</div>
      <b className="absolute top-[414px] left-[935px]">530KG</b>
    </div>
  );
};

export default FUNDBUYCREDIT;
