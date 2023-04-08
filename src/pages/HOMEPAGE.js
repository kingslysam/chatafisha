import bg from '../public/shutterstock-1525566017-3@2x.png'
import add from '../public/add.svg'
import patathamani from '../public/rectangle-4@2x.png'
import mainlogo from '../public/main-logo6.svg'
import fuchabins from '../public/rectangle-6@2x.png'
import rangi from '../public/rectangle-61@2x.png'
import eco from '../public/rectangle-62@2x.png'
import nipe from '../public/rectangle-63@2x.png'
import arrow from '../public/iconsaxlineararrowright2.svg'

const HOMEPAGE = () => {
    return (
        <div className="relative bg-black/50 w-full h-[832px] overflow-hidden text-left text-xs text-black font-syne">
            <img
                className="absolute top-[0px] left-[0px] w-screen h-full object-cover"
                alt=""
                src={bg}
            />
            <div className="absolute top-[177px] left-[762px] w-[120.23px] h-[121.87px] text-white">
                <a href="/news-update" className="text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-4xl bg-black w-[120.23px] h-[121.87px]"/>
                    <b className="absolute top-[72.06px] left-[15.57px] inline-block w-[63.6px] h-[29.2px]">
                        <p className="m-0">{`News &`}</p>
                        <p className="m-0">Updates</p>
                    </b>
                    <img
                        className="absolute top-[10.63px] left-[94.06px] w-[16.36px] h-[16.36px]"
                        alt=""
                        src={add}
                    />
                </a>
            </div>
            <div className="absolute top-[175px] left-[902px] w-[120.23px] h-[121.87px] text-white">
                <a href="/market-place" className="text-white">
                    <div
                        className="absolute top-[0px] left-[0px] rounded-4xl bg-mediumaquamarine-200 w-[120.23px] h-[121.87px]"/>
                    <b className="absolute top-[74px] left-[20px] inline-block w-[79.17px] h-[14.28px]">
                        Sokoni
                    </b>
                    <b className="absolute top-[87px] left-[20px] inline-block w-[94px] h-3.5">
                        Market place
                    </b>
                    <img
                        className="absolute h-[13.42%] w-[13.61%] top-[8.72%] right-[6.8%] bottom-[77.85%] left-[79.59%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src={add}
                    />
                </a>
            </div>
            <div className="absolute top-[175px] left-[1041.6px] w-[120.23px] h-[121.87px] text-white">
                <div className="absolute top-[0px] left-[0px] rounded-4xl bg-royalblue w-[120.23px] h-[121.87px]"/>
                <b className="absolute top-[72.06px] left-[14.12px] inline-block w-[97.34px] h-[29.2px]">
                    <p className="m-0">Tupe</p>
                    <p className="m-0">Support</p>
                </b>
                <img
                    className="absolute h-[13.42%] w-[13.61%] top-[8.72%] right-[7.48%] bottom-[77.85%] left-[78.91%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={add}
                />
            </div>
            <div className="absolute top-[175px] left-[1185px] w-[120.23px] h-[121.87px] text-white">
                <div className="absolute top-[0px] left-[0px] rounded-4xl bg-deepskyblue w-[120.23px] h-[121.87px]"/>
                <b className="absolute top-[86.99px] left-[15.02px] inline-block w-[104.48px] h-[14.28px]">
                    Tufahamu
                </b>
                <img
                    className="absolute top-[10.63px] left-[94.88px] w-[16.36px] h-[16.36px]"
                    alt=""
                    src={add}
                />
            </div>
            <div
                className="absolute top-[580px] mb-96 left-[67px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1175px] h-[203px] text-mini">
                <div
                    className="absolute top-[0px] left-[-36px] w-[1227px] flex flex-row py-0 pr-[25px] pl-0 box-border items-start justify-start gap-[11px]">
                    <div className="relative w-[326px] h-[203px] shrink-0">
                        <div
                            className="absolute top-[146px] left-[35px] rounded-lg bg-white w-[292px] h-[57px] mix-blend-normal"/>
                        <img
                            className="absolute top-[0px] left-[36px] w-[290px] h-40 object-cover"
                            alt=""
                            src={fuchabins}
                        />
                        <div className="absolute top-[173px] left-[44px] font-semibold">
                            FUCHA BINS
                        </div>
                    </div>
                    <div className="relative w-[327px] h-[203px] shrink-0">
                        <div
                            className="absolute top-[146px] left-[1px] rounded-lg bg-white w-[326px] h-[57px] mix-blend-normal"/>
                        <img
                            className="absolute top-[0px] left-[0px] rounded-lg w-[327px] h-40 object-cover"
                            alt=""
                            src={rangi}
                        />
                        <div className="absolute top-[173px] left-[10px] font-semibold">
                            RANGI CHANYA
                        </div>
                    </div>
                    <div className="relative w-[327px] h-[203px] shrink-0">
                        <div
                            className="absolute top-[146px] left-[1px] bg-white rounded-lg w-[326px] h-[57px] mix-blend-normal"/>
                        <img
                            className="absolute top-[0px] left-[0px] w-[327px] rounded-lg h-40 object-cover"
                            alt=""
                            src={eco}
                        />
                        <div className="absolute top-[173px] left-[14px] font-semibold">
                            ECO - BRICKS
                        </div>
                    </div>
                    <div className="relative w-[327px] h-[203px] shrink-0">
                        <div
                            className="absolute top-[146px] left-[1px] bg-white rounded-lg w-[326px] h-[57px] mix-blend-normal"/>
                        <img
                            className="absolute top-[0px] left-[0px] w-[327px] rounded-lg h-40 object-cover"
                            alt=""
                            src={nipe}
                        />
                        <div className="absolute top-[173px] left-[10px] font-semibold">
                            NIPE FAGIO
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute h-[3.49%] w-[93.1%] top-[68.42%] right-[1.43%] bottom-[32.09%] left-[5.47%] text-5xl">
                <b className="absolute h-full w-[26.14%] top-[0%] left-[0%] inline-block">
                    PROJECTS
                </b>
                <div
                    className="absolute h-[58.62%] w-[10.8%] top-[20.69%] right-[0%] bottom-[20.69%] left-[89.2%] text-base">
                    <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
                        View All
                    </div>
                    <img
                        className="absolute top-[2px] left-[64.58px] w-[31.15px] h-[15px] overflow-hidden"
                        alt=""
                        src={arrow}
                    />
                </div>
            </div>
            <div
                className="absolute top-[158px] left-[67px] w-[549px] h-[344.17px] mix-blend-normal text-5xl text-white">
                <img
                    className="absolute top-[0px] left-[-4px] rounded-2xl w-[557px] h-[352.17px] object-cover"
                    alt=""
                    src={patathamani}
                />
                <div
                    className="absolute top-[203px] left-[44px] font-semibold inline-block w-[437px] h-[109px] mix-blend-normal">
                    <p className="m-0">Pata thamani</p>
                    <p className="m-0 text-base">
                        Earn carbon credits through the offsets of plastic waste into usable
                        goods and building materials.
                    </p>
                </div>
                <img
                    className="absolute h-[15.09%] w-[10.6%] top-[9.76%] right-[7.72%] bottom-[75.15%] left-[81.68%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={mainlogo}
                />
            </div>
            <div className="absolute top-[114px] left-[80px] text-xl font-medium inline-block w-[62px] h-5">
                Karibu
            </div>
            <b className="absolute top-[118px] left-[1092px] text-xl inline-block w-[178px] h-6">
                CHATAFISHA
            </b>
            <div className="absolute top-[53px] left-[943px] font-medium inline-block w-[62px] h-5">{`Home `}</div>
            <div
                className="absolute top-[49px] left-[1099px] rounded-lg-5 bg-gainsboro-200 shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[104px] h-[22px]"/>
            <div className="absolute top-[53px] left-[1028px] font-medium inline-block w-[62px] h-5">
                Log in
            </div>
            <div className="absolute top-[52px] left-[1108px] font-medium inline-block w-[105px] h-5">
                connect wallet
            </div>
            <img
                className="absolute h-[3.88%] w-[3.17%] top-[14.42%] right-[7.3%] bottom-[81.69%] left-[87%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={mainlogo}
            />
            <div className="absolute top-[403px] left-[764px] text-xl text-gray-200 inline-block w-[538px] h-[110px]">
                <p className="m-0">{`For the first time we have created an application that `}</p>
                <p className="m-0">
                    will allow you to impact real change while earning
                </p>
                <p className="m-0">
                    carbon credits. Our platform features plastic collectors and recycling
                    projects
                </p>
            </div>
            <b className="absolute top-[342px] left-[764px] text-xl">
                <p className="m-0">Get all the latest news happening around the</p>
                <p className="m-0">Chatazen community.</p>
            </b>
        </div>
    );
};

export default HOMEPAGE;
