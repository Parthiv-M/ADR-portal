import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Radio } from "antd";

export default function Form1page3f4() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Modified Schumock and Thornton scale</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was there a history of allergy or previous reactions to the drug?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was the drug involved inappropriate for the patient’s clinical condition?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was the dose, route or frequency of administration inappropriate for the patient’s age, weight or disease state?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was a toxic serum drug concentration (or laboratory monitoring test) documented?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was there a known treatment for the adverse drug reaction?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was required therapeutic drug monitoring or other necessary lab tests not performed?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was a drug interaction involved in the ADR?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <p className="text-[16px] m-0 font-bold">Final Result</p>
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Definitely preventable</Radio.Button>
              <Radio.Button value={1}>Probably preventable</Radio.Button>
              <Radio.Button value={2}>Not preventable</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
