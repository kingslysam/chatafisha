import bg from '../public/shutterstock-1525566017-1@2x.png'
import add from '../public/add.svg'
import rect from '../public/rectangle-41@2x.png'
import mainlogo from '../public/main-logo6.svg'

const LOGINPAGE = () => {
    return (
        <div
            className="relative bg-black/50 w-full h-[832px] overflow-hidden text-left text-[18.38px] text-black font-syne">
            <img
                className="absolute top-[0px] left-[0px] w-screen h-screen object-cover"
                alt=""
                src={bg}
            />
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[606px] left-[746px] w-[120.23px] h-[121.87px]">
                <a href="/news-update" className="text-white">
                    <div className="absolute top-[0px] left-[0px] rounded-4xl bg-black w-[120.23px] h-[121.87px]"/>
                    <b className="absolute top-[72.06px] left-[15.57px] text-xs inline-block font-syne text-white text-left w-[63.6px] h-[29.2px]">
                        <p className="m-0">{`News &`}</p>
                        <p className="m-0">Updates</p>
                    </b>
                    <img
                        className="absolute top-[10.63px] left-[94.06px] w-[16.36px] h-[16.36px]"
                        alt=""
                        src={add}
                    />
                </a>
            </button>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[604px] left-[886px] w-[120.23px] h-[121.87px]">
                <a href="/market-place" className="text-white">
                    <div
                        className="absolute top-[0px] left-[0px] rounded-4xl bg-mediumaquamarine-200 w-[120.23px] h-[121.87px]"/>

                    <b className="absolute top-[74px] left-[20px] text-xs inline-block font-syne text-white text-left w-[79.17px] h-[14.28px]">
                        Sokoni
                    </b>
                    <b className="absolute top-[87px] left-[20px] text-xs inline-block font-syne text-white text-left w-[94px] h-3.5">
                        Market place
                    </b>
                    <img
                        className="absolute h-[13.42%] w-[13.61%] top-[8.72%] right-[6.8%] bottom-[77.85%] left-[79.59%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src={add}
                    />
                </a>
            </button>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[604px] left-[1025.6px] w-[120.23px] h-[121.87px]">
                <div className="absolute top-[0px] left-[0px] rounded-4xl bg-royalblue w-[120.23px] h-[121.87px]"/>
                <b className="absolute top-[72.06px] left-[14.12px] text-xs inline-block font-syne text-white text-left w-[97.34px] h-[29.2px]">
                    <p className="m-0">Tupe</p>
                    <p className="m-0">Support</p>
                </b>
                <img
                    className="absolute h-[13.42%] w-[13.61%] top-[8.72%] right-[7.48%] bottom-[77.85%] left-[78.91%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src={add}
                />
            </button>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[604px] left-[1169px] w-[120.23px] h-[121.87px]">
                <div className="absolute top-[0px] left-[0px] rounded-4xl bg-deepskyblue w-[120.23px] h-[121.87px]"/>
                <b className="absolute top-[86.99px] left-[15.02px] text-xs inline-block font-syne text-white text-left w-[104.48px] h-[14.28px]">
                    Tufahamu
                </b>
                <img
                    className="absolute top-[10.63px] left-[94.88px] w-[16.36px] h-[16.36px]"
                    alt=""
                    src={add}
                />
            </button>
            <div
                className="absolute top-[232px] left-[740px] w-[549px] h-[344.17px] mix-blend-normal text-5xl text-white">
                <img
                    className="absolute top-[0px] left-[-4px] rounded-2xl w-[557px] h-[352.17px] object-cover"
                    alt=""
                    src={rect}
                />
                <div
                    className="absolute top-[203px] left-[70px] font-semibold inline-block w-[437px] h-[109px] mix-blend-normal">
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
            <h2 className="m-0 absolute top-[130px] left-[111px] text-[47.11px] font-bold font-inherit inline-block w-[452.17px] h-[125px]">
                <p className="m-0">Karibu</p>
                <p className="m-0">Chatafisha</p>
            </h2>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[53px] left-[943px] text-xs font-medium font-syne text-black text-left inline-block w-[62px] h-5"
                autoFocus
            >{`Home `}</button>
            <button
                className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[49px] left-[1099px] rounded-lg-5 shadow-[0px_4px_2px_rgba(0,_0,_0,_0.1)] w-[104px] h-[22px]"/>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[53px] left-[1028px] text-xs font-medium font-syne text-black text-left inline-block w-[62px] h-5">
                Log in
            </button>
            <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[52px] left-[1108px] text-xs font-medium font-syne text-black text-left inline-block w-[105px] h-5">
                connect wallet
            </button>
            <img
                className="absolute h-[6.05%] w-[4.93%] top-[17.07%] right-[71.24%] bottom-[76.89%] left-[23.83%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={mainlogo}
            />
            <button
                className="cursor-pointer [border:none] p-0 bg-gainsboro-100 absolute top-[427px] left-[98px] rounded-sm shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[529px] h-[93px]"
                autoFocus
            />
            <button
                className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[544px] left-[96px] rounded-sm w-[529px] h-[93px]"/>
            <div className="absolute top-[582.85px] left-[263px] font-medium">
                Already have account
            </div>
            <div className="absolute top-[353px] left-[230px] text-[34.24px] font-medium">
                Let’s get started
            </div>
            <a href="/home-page">
                <div className="absolute top-[463px] left-[275px] font-medium">
                    Open an account
                </div>
            </a>
        </div>
    );
};

export default LOGINPAGE;
