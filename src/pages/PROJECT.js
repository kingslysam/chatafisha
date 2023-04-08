import { useState, useCallback } from "react";
import FUNDBUYCREDIT from "../components/FUNDBUYCREDIT";
import PortalPopup from "../components/PortalPopup";
import bg from '../public/shutterstock-1525566017-3@2x.png'
import add from '../public/add.svg'
import mainlogo from '../public/main-logo6.svg'
import group3 from '../public/group-3.svg'
import arrowleft from '../public/iconsaxlineararrowleft1.svg'
import mask2  from '../public/mask-group2@2x.png'
import mask12 from '../public/mask-group1@2x.png'
import mask from '../public/mask-group@2x.png'
import rect1 from '../public/rectangle-17@2x.png'


const PROJECT = () => {
  const [isFUNDBUYCREDITOpen, setFUNDBUYCREDITOpen] = useState(false);

  const openFUNDBUYCREDIT = useCallback(() => {
    setFUNDBUYCREDITOpen(true);
  }, []);

  const closeFUNDBUYCREDIT = useCallback(() => {
    setFUNDBUYCREDITOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-black/50 w-full h-[2032px] text-left text-xs text-black font-syne">
        <img
          className="absolute top-[1px] left-[0px] w-full h-full object-cover"
          alt=""
          src={bg}
        />
        <div className="absolute top-[43px] left-[79px] w-[1143px] h-[32.3px]">
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
        <div className="absolute top-[163px] left-[74px] w-[317.79px] h-[252.3px] text-[16.23px] text-white">
          <img
            className="absolute top-[0px] left-[0px] rounded-[28.48px] w-[317.65px] h-[252.08px] object-cover"
            alt=""
            src={rect1}
          />
          <div className="absolute top-[210.94px] left-[0px] rounded-t-none rounded-br-[29.64px] rounded-bl-[22.06px] bg-darkslategray [backdrop-filter:blur(13.79px)] w-[317.79px] h-[41.36px]" />
          <div className="absolute top-[220.18px] left-[24.97px] font-extrabold">
            Nipe Fagio
          </div>
        </div>
        <div className="absolute top-[162px] left-[414px] w-[420px] h-[66px] text-8xl-5">
          <b className="absolute top-[0px] left-[0px] inline-block w-[420px]">
            <p className="m-0">Off-setting 80oTonnes of</p>
            <p className="m-0">Plastic</p>
          </b>
        </div>
        <div className="absolute top-[162px] left-[911px] rounded-[24.06px] bg-turquoise-300 shadow-[0px_5.5px_5.5px_rgba(0,_0,_0,_0.25)] w-[144.38px] h-[39.88px]" />
        <div
          className="absolute top-[169px] left-[954px] text-[17.88px] font-medium inline-block w-[75.63px] h-[19.25px] cursor-pointer"
          onClick={openFUNDBUYCREDIT}
        >
          FUND
        </div>
        <div className="absolute top-[239px] left-[416px] text-[20.5px] inline-block w-[719px] h-[214px]">
          We are Nipe Fagio an environmental non-profit organization committed
          to cleaning and preserving our beaches. Our goal is to collect and
          remove at least 10 tons of plastic waste through community clean-up
          events and outreach programs. Our team of dedicated volunteers are
          passionate about protecting marine life and reducing plastic
          pollution. Support our mission and help us create cleaner beaches for
          all.
        </div>
        <div className="absolute top-[396px] left-[500px] w-[500px] h-[120px] text-[13.36px]">
          <b className="absolute top-[0px] left-[374.09px] text-[18.37px] inline-block text-forestgreen-100 w-[121.91px] h-[23.38px]">
            OUR GOAL
          </b>
          <div className="absolute top-[97px] left-[386px] text-[18.37px] font-extrabold inline-block w-[114px] h-[23px]">
            800Tn
          </div>
          <div className="absolute top-[58.45px] left-[115.23px] rounded-[21.71px] bg-forestgreen-300 w-[96.86px] h-[26.72px]" />
          <div className="absolute top-[58.45px] left-[237.14px] rounded-[21.71px] bg-mediumslateblue w-[88.51px] h-[28.39px]" />
          <div className="absolute top-[60.12px] left-[0px] rounded-[21.71px] bg-gainsboro-200 w-[90.18px] h-[26.72px]" />
          <div className="absolute top-[63.46px] left-[16.7px]">secured</div>
          <div className="absolute top-[63.46px] left-[136.94px] text-white">
            verified
          </div>
          <div className="absolute top-[63.46px] left-[250.51px] text-white">
            Processed
          </div>
          <img
            className="absolute h-[54.8%] w-[25.94%] top-[22.83%] right-[1.25%] bottom-[22.37%] left-[72.81%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={group3}
          />
          <b className="absolute top-[36.74px] left-[15.03px]">530KG</b>
          <b className="absolute top-[36.74px] left-[135.27px]">430KG</b>
          <b className="absolute top-[38.41px] left-[255.52px]">830KG</b>
        </div>
        <div className="absolute top-[448px] left-[79px] h-[344px] flex flex-col p-2.5 box-border items-start justify-start text-[21.44px]">
          <div className="relative inline-block w-[1008px]">
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>Project Design and Baseline Creation</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              The NIPE FAGIO Plastic Waste Offset Program was designed to
              incentivize the reduction of greenhouse gas emissions by
              offsetting carbon emissions through the collection and recycling
              of plastic waste. The project involved collecting plastic waste
              and using it as a raw material to produce products such as
              furniture, building blocks, and other construction materials. The
              expected reduction in greenhouse gas emissions was estimated to be
              500 tonnes of CO2 equivalent. The project design and baseline
              creation included identifying the types and quantities of plastic
              waste that would be collected and recycled, the methods of
              collection and recycling, and the expected reduction in greenhouse
              gas emissions. NIPE FAGIO worked with VERRA to ensure that the
              project was designed to meet the VERRA Plastic Program
              Methodology.
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>Monitoring Plan</b>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              A data management system was implemented to collect and analyze
              data on the plastic waste that was collected and recycled. The
              system included a mobile application that plastic pickers and
              recyclers could use to log data on the plastic waste they
              collected and recycled. The data that was collected included the
              type and quantity of plastic waste collected, the location of
              collection, and the method of recycling.
            </p>
            <p className="m-0">
              The data that was collected through the mobile application was
              stored in a decentralized database that could be accessed by NIPE
              FAGIO and VERRA. NIPE FAGIO provided feedback to plastic pickers
              and recyclers on their performance, including information on the
              amount of plastic waste they had collected and recycled, as well
              as the environmental impact of their efforts.
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              <b>Verification Plan</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              NIPE FAGIO worked with VERRA to verify the collected and/or
              recycled plastic waste. The verification criteria were based on
              the VERRA Plastic Program Methodology, which is designed to ensure
              that plastic waste is collected and recycled in a way that results
              in a net reduction in greenhouse gas emissions. The verification
              process included a review of project documentation and on-site
              verification visits to ensure that the project was being
              implemented according to the methodology and that the collected
              and/or recycled plastic waste met the verification criteria.
            </p>
            <p className="m-0">Reporting and Documentation</p>
            <p className="m-0">
              NIPE FAGIO prepared regular reports that documented the progress
              and outcomes of the project, including the amount of plastic waste
              collected and recycled, the reduction in greenhouse gas emissions,
              and the economic benefits of the project. The reports were
              submitted to VERRA for verification.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <b>Verification and Certification</b>
            </p>
            <p className="m-0">
              <b>&nbsp;</b>
            </p>
            <p className="m-0">
              VERRA reviewed the project documentation and conducted on-site
              verification visits to ensure that the project was being
              implemented according to the methodology and that the collected
              and/or recycled plastic waste met the verification criteria. Once
              the project had been successfully verified, VERRA issued carbon
              credits to NIPE FAGIO.
            </p>
          </div>
        </div>
        <img
          className="absolute top-[698px] left-[1118px] w-[42.44px] h-[70.77px] overflow-hidden"
          alt=""
          src={arrowleft}
        />
        <div className="absolute top-[1730px] left-[91px] w-[358px] h-[254px] overflow-x-scroll">
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
          className="absolute top-[91px] left-[79px] w-[61.74px] h-[37.03px] overflow-hidden"
          alt=""
          src={arrowleft}
        />
      </div>
      {isFUNDBUYCREDITOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFUNDBUYCREDIT}
        >
          <FUNDBUYCREDIT onClose={closeFUNDBUYCREDIT} />
        </PortalPopup>
      )}
    </>
  );
};

export default PROJECT;
