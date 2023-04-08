import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import iconaxsquaredown from '../public/iconsaxbulkarrowsquaredown1.svg'
import line8 from '../public/line-8.svg'
import line72 from '../public/line-72.svg'
import vector2 from '../public/vector2.svg'
import maskgroup4 from "../public/mask-group4@2x.png"
import group21 from "../public/group-21.svg"
import linechart11 from "../public/line-chart-11.svg"
import rect47 from "../public/rectangle-47.svg"
import linechart2 from "../public/line-chart-2.svg"
import line71 from "../public/line-71.svg"
import mainlogo from "../public/main-logo6.svg"
import rect480 from "../public/rectangle-480.svg"
import rect478 from "../public/rectangle-478.svg"


const REGISTRATIONANDBIO = () => {
    const navigate = useNavigate();

    const onSELLCARBONCREDITClick = useCallback(() => {
        navigate("/project-overview");
    }, [navigate]);

    return (
        <div className="relative bg-white w-full h-[832px] overflow-hidden text-left text-xs text-black font-syne">
            <div className="absolute top-[53px] left-[943px] font-medium inline-block w-[62px] h-5">{`Home `}</div>
            <div
                className="absolute top-[49px] left-[1099px] rounded-lg-5 bg-gainsboro-200 shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[104px] h-[22px]"/>
            <div className="absolute top-[53px] left-[1028px] font-medium inline-block w-[62px] h-5">
                Log in
            </div>
            <div className="absolute top-[52px] left-[1108px] font-medium inline-block w-[105px] h-5">
                connect wallet
            </div>
            <div
                className="absolute top-[166px] left-[131px] w-[316px] h-[581px] text-[10.27px] text-white font-kumbh-sans">
                <div
                    className="absolute top-[0px] left-[0px] rounded-12xl bg-mediumaquamarine-200 w-[316px] h-[581px]"/>
                <input type="text" className="absolute top-[132px] left-[26px] rounded-smi bg-white w-[258px] h-12"/>
                <input type="text" className="absolute top-[215px] left-[25px] rounded-smi bg-white w-[258px] h-12"/>
                <input type="text" className="absolute top-[294px] left-[24px] rounded-smi bg-white w-[177px] h-12"/>
                <input type="text"
                       className="absolute top-[373px] left-[26px] rounded-smi w-[125px] h-[47px]"
                       alt=""
                       src={rect478}
                />
                <input type="text" className="absolute top-[375px] left-[170px] rounded-smi bg-white w-[124px] h-[47px]"/>
                <button
                       className="absolute top-[441px] left-[37px] rounded-smi w-[246px] h-[47px]"
                       alt=""
                       src={rect480}
                />
                <div
                    className="absolute top-[37px] left-[37px] text-[22.56px] font-semibold font-syne inline-block w-[221px]">
                    Register Information
                </div>
                <div className="absolute top-[115px] left-[35px] font-light inline-block w-[166px]">
                    Name of Picker / Organization
                </div>
                <b className="absolute top-[506px] left-[32px] text-[8.63px] inline-block text-center w-[245px]">
                    <p className="m-0">
                        if you don’t have a registration number please contact
                    </p>
                    <p className="m-0">our website help center or dial *150*88#</p>
                </b>
                <div className="absolute top-[198px] left-[32px] font-light inline-block w-32">
                    Date of registration
                </div>
                <div
                    className="absolute top-[458px] left-[102px] font-extrabold text-black inline-block w-32 cursor-pointer"
                    onClick={onSELLCARBONCREDITClick}
                >
                    SELL CARBON CREDIT
                </div>
                <div className="absolute top-[278px] left-[32px] font-light inline-block w-[102px]">
                    Registration No.
                </div>
                <div className="absolute top-[357px] left-[36px] font-light inline-block w-[63px]">
                    Location
                </div>
                <div className="absolute top-[357px] left-[180px] font-light inline-block w-[67px]">
                    Contact
                </div>
            </div>
            <b className="absolute top-[62px] left-[165px] text-xl">CHATAFISHA</b>
            <img
                className="absolute h-[3.4%] w-[2.78%] top-[7.45%] right-[77.69%] bottom-[89.15%] left-[23.53%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={mainlogo}
            />
            <div className="absolute top-[171px] left-[1036px] w-[345px] h-[581px] text-3xs text-gray-400">
                <div
                    className="absolute top-[0px] left-[0px] rounded-12xl bg-mediumaquamarine-200 w-[316px] h-[581px]"/>
                <div className="absolute top-[133px] left-[36px] rounded-smi bg-gainsboro-200 w-[205px] h-[83px]"/>
                <div className="absolute top-[351px] left-[31px] rounded-smi bg-white w-[258px] h-[169px]"/>
                <div className="absolute top-[270px] left-[36px] rounded-smi bg-gainsboro-200 w-[177px] h-12"/>
                <div
                    className="absolute top-[38px] left-[124px] text-[22.56px] font-semibold text-white inline-block w-[221px]">
                    Wallet
                </div>
                <div className="absolute top-[155px] left-[74px] text-[26.73px] font-semibold inline-block w-[153px]">
                    1,219,000
                </div>
                <div
                    className="absolute top-[273px] left-[55px] text-[26.73px] font-semibold inline-block w-[109.04px]">
                    0.530
                </div>
                <div className="absolute top-[96px] left-[37px] rounded-smi-5 bg-aquamarine w-[116px] h-[22px]"/>
                <div className="absolute top-[237px] left-[36px] rounded-smi-5 bg-turquoise-200 w-[116px] h-[22px]"/>
                <b className="absolute top-[101px] left-[46px] text-black">
                    Amount raised
                </b>
                <b className="absolute top-[243px] left-[46px] text-black">
                    Total Credit sold
                </b>
                <b className="absolute top-[198px] left-[51px] text-darkgray-100">
                    wallet balance TSH
                </b>
                <div
                    className="absolute top-[381px] left-[56px] w-[119.24px] h-[113.01px] text-[7.33px] text-dimgray-400">
                    <div className="absolute top-[0px] left-[0px] tracking-[0.2px] leading-[12.83px]">
                        Amount Selling
                    </div>
                    <div
                        className="absolute top-[54.19px] left-[0.66px] tracking-[0.2px] leading-[12.83px] text-mediumslateblue inline-block w-[114.32px]">
                        Type of plastic collected
                    </div>
                    <div className="absolute top-[84.59px] left-[0px] text-[3.46px] tracking-[0.1px] leading-[6.06px]">
                        (waste collected credit)
                    </div>
                    <div
                        className="absolute top-[85.91px] left-[64.76px] text-[3.46px] tracking-[0.1px] leading-[6.06px]">
                        (waste recycled credit)
                    </div>
                    <b className="absolute top-[74.67px] left-[0px] tracking-[0.2px] leading-[12.83px]">
                        WCC
                    </b>
                    <b className="absolute top-[74.67px] left-[61.46px] tracking-[0.2px] leading-[12.83px]">
                        WRC
                    </b>
                    <b className="absolute h-[21.05%] w-[58.74%] top-[20.47%] left-[0%] text-[19.42px] tracking-[0.14px] leading-[22.84px] flex text-black-87 items-end">
                        180kg
                    </b>
                    <b className="absolute h-[16.37%] w-[45.69%] top-[79.53%] left-[0%] text-base-1 tracking-[0.11px] leading-[17.77px] flex text-black-87 items-end">
                        71kg
                    </b>
                    <b className="absolute h-[16.37%] w-[45.69%] top-[80.7%] left-[54.31%] text-base-1 tracking-[0.11px] leading-[17.77px] flex text-black-87 items-end">
                        109Kg
                    </b>
                    <div
                        className="absolute top-[11.29px] left-[0px] tracking-[0.2px] leading-[12.83px] font-roboto text-states-success inline-block w-[74.67px]">
                        +5% of Target
                    </div>
                    <img
                        className="absolute top-[77.98px] left-[54.19px] w-[0.32px] h-[35.03px]"
                        alt=""
                        src={line71}
                    />
                </div>
                <div
                    className="absolute top-[365px] left-[189px] w-[78.89px] h-[58px] text-mini text-states-success font-roboto">
                    <img
                        className="absolute top-[0px] left-[25.25px] w-[52.25px] h-7"
                        alt=""
                        src={linechart2}
                    />
                    <b className="absolute top-[24px] left-[0px] tracking-[0.23px] leading-[14.78px] inline-block w-[78.89px]">{`Selling 1kg `}</b>
                    <b className="absolute top-[43px] left-[0px] tracking-[0.23px] leading-[14.78px] inline-block w-[78.89px]">
                        USD $1
                    </b>
                </div>
            </div>
            <div className="absolute top-[169px] left-[457px] w-[566px] h-[581px] text-[4.89px]">
                <div
                    className="absolute top-[0px] left-[0px] rounded-[17px] bg-mediumaquamarine-200 w-[566px] h-[581px]"/>
                <div
                    className="absolute top-[102px] left-[404.55px] w-[129.35px] h-[77px] text-mini text-states-success font-roboto">
                    <img
                        className="absolute top-[0px] left-[0px] rounded-mini w-[129.35px] h-[77px]"
                        alt=""
                        src={rect47}
                    />
                    <img
                        className="absolute top-[4px] left-[50.93px] w-[52.25px] h-7"
                        alt=""
                        src={linechart11}
                    />
                    <b className="absolute top-[28px] left-[25.69px] tracking-[0.23px] leading-[14.78px] inline-block w-[78.89px]">{`Selling 1kg `}</b>
                    <b className="absolute top-[47px] left-[25.69px] tracking-[0.23px] leading-[14.78px] inline-block w-[78.89px]">
                        USD $1
                    </b>
                </div>
                <b className="absolute top-[20.83%] left-[34.29%] text-[10.45px] text-gainsboro-200">
                    {" "}
                    Mbezi, Dar es salaam
                </b>
                <img
                    className="absolute h-[6.32%] w-[11.4%] top-[8.95%] right-[6.27%] bottom-[84.73%] left-[82.33%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-21.svg"
                />
                <div
                    className="absolute h-[12.9%] w-[36.3%] top-[12.05%] left-[31.98%] text-[18.05px] text-whitesmoke-200 inline-block">
                    <p className="m-0 font-semibold">Baraka Ramadhani</p>
                    <p className="m-0 font-medium">ID: 12354</p>
                </div>
                <img
                    className="absolute h-[20.31%] w-[20.36%] top-[12.05%] right-[70.73%] bottom-[67.64%] left-[8.91%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src={maskgroup4}
                />
                <img
                    className="absolute h-[1.98%] w-[1.48%] top-[21.16%] right-[66.19%] bottom-[76.85%] left-[32.33%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={vector2}
                />
                <div className="absolute top-[207px] left-[0px] rounded-smi bg-gainsboro-200 w-[566px] h-[374px]"/>
                <div
                    className="absolute h-[3.28%] w-[12.8%] top-[23.75%] right-[54.33%] bottom-[72.97%] left-[32.86%] text-[9.75px] text-white">
                    <div className="absolute top-[20%] left-[23.68%]">{`Contact `}</div>
                    <div
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[3.81px] box-border border-[0.4px] border-solid border-white"/>
                </div>
                <div
                    className="absolute top-[448px] left-[50px] text-[10.7px] tracking-[0.17px] leading-[10.54px] font-roboto text-gray-300 inline-block w-[459px] h-[102px]">
                    <p className="m-0">
                        Meet Baraka Ramadhani, a dedicated and hardworking day-to-day
                        plastic picker who has been working in this field for eight years
                        now. Baraka is passionate about keeping the environment clean and
                        free from plastic waste.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                        On an average day, Baraka picks up an impressive 50 kilograms of
                        plastic waste. This is no small feat! Through his hard work and
                        dedication, Baraka has helped to prevent tons of plastic from ending
                        up in our oceans and natural habitats
                    </p>
                </div>
                <div className="absolute top-[239px] left-[397px] rounded bg-white w-[109px] h-5"/>
                <div className="absolute top-[241px] left-[435px] text-mini tracking-[0.23px] leading-[14.78px]">
                    2023
                </div>
                <div className="absolute top-[267px] left-[40px] w-[494px] h-[158px] text-[6.42px] text-dimgray-400">
                    <div className="absolute top-[0px] left-[0px] rounded-[8.68px] bg-white w-[494px] h-[158px]"/>
                    <div
                        className="absolute top-[64.24px] left-[21.41px] tracking-[0.18px] leading-[11.24px] text-mediumslateblue inline-block w-[100.12px]">
                        Total waste collected
                    </div>
                    <div className="absolute top-[92px] left-[28px] text-[3.03px] tracking-[0.08px] leading-[5.3px]">
                        (waste collected credit)
                    </div>
                    <div className="absolute top-[92px] left-[76px] text-[3.03px] tracking-[0.08px] leading-[5.3px]">
                        (waste recycled credit)
                    </div>
                    <b className="absolute top-[82.18px] left-[35px] tracking-[0.18px] leading-[11.24px]">
                        WCC
                    </b>
                    <b className="absolute top-[82.18px] left-[83px] tracking-[0.18px] leading-[11.24px]">
                        WRC
                    </b>
                    <b className="absolute h-[22.78%] w-[21.46%] top-[15.19%] left-[3.64%] text-[29.38px] tracking-[0.22px] leading-[34.57px] flex text-black-87 items-end">
                        530Kg
                    </b>
                    <b className="absolute h-[10.26%] w-[9.66%] top-[60.76%] left-[4.25%] text-[13.23px] tracking-[0.1px] leading-[15.56px] flex text-black-87 items-end">
                        71kg
                    </b>
                    <b className="absolute h-[10.26%] w-[9.66%] top-[61.17%] left-[15.7%] text-[13.23px] tracking-[0.1px] leading-[15.56px] flex text-black-87 items-end">
                        109Kg
                    </b>
                    <img
                        className="absolute top-[83px] left-[73px] w-[0.28px] h-[30.68px]"
                        alt=""
                        src={line72}
                    />
                </div>
                <img
                    className="absolute top-[333px] left-[243px] w-[255px] h-0.5"
                    alt=""
                    src={line8}
                />
                <b className="absolute top-[289px] left-[245px] text-mini tracking-[0.23px] leading-[14.78px]">
                    waste accounted for
                </b>
                <b className="absolute top-[229px] left-[55px] text-mini tracking-[0.23px] leading-[14.78px]">
                    Dash Board
                </b>
                <div
                    className="absolute top-[313px] left-[245px] rounded-[2.45px] bg-lightgoldenrodyellow w-[53px] h-[16.31px]"/>
                <div className="absolute top-[338px] left-[244px] rounded-[2.45px] bg-gainsboro-200 w-[58px] h-4"/>
                <div
                    className="absolute top-[338px] left-[307px] rounded-[2.45px] bg-lightgoldenrodyellow w-[108px] h-4"/>
                <div
                    className="absolute top-[313px] left-[303px] rounded-[2.45px] bg-lightgoldenrodyellow w-[53px] h-[16.31px]"/>
                <div
                    className="absolute top-[313px] left-[362px] rounded-[2.45px] bg-lightgoldenrodyellow w-[53px] h-4"/>
                <div className="absolute top-[312px] left-[419px] rounded-[2.45px] bg-mistyrose w-[69px] h-4"/>
                <div className="absolute top-[314.32px] left-[249.89px] tracking-[0.07px] leading-[11.1px]">
                    Polycarbonate (PC)
                </div>
                <div className="absolute top-[315px] left-[309px] tracking-[0.07px] leading-[11.1px]">
                    Polyethylene (PE)
                </div>
                <div className="absolute top-[314px] left-[369px] tracking-[0.07px] leading-[11.1px]">
                    Polypropylene (PP)
                </div>
                <div
                    className="absolute top-[314px] left-[421px] tracking-[0.07px] leading-[5.6px] text-center flex items-end justify-center w-[66px]">
                    Polyethylene Terephthalate (PETE or PET)
                </div>
                <div className="absolute top-[342px] left-[247px] tracking-[0.07px] leading-[5.6px] text-center">
                    Polyvinyl Chloride (PVC)
                </div>
                <div className="absolute top-[342px] left-[322px] tracking-[0.07px] leading-[5.6px] text-center">
                    Acrylonitrile-Butadiene-Styrene (ABS)
                </div>
            </div>
            <img
                className="absolute top-[414px] left-[844px] w-2 h-2 overflow-hidden"
                alt=""
                src={iconaxsquaredown}
            />
            <img
                className="absolute top-[436px] left-[800px] w-[17px] h-3.5 overflow-hidden"
                alt=""
                src={iconaxsquaredown}
            />
        </div>
    );
};

export default REGISTRATIONANDBIO;
