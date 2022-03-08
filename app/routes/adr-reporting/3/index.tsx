import FormLayout from "~/layouts/forms";

// Import Ant Design Elements
import { Input, DatePicker } from "antd";

import InputDescription from "~/components/forms/inputDescription/InputDescription";

export default function Form1page3() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Medication</div>
          <div className="mx-4 min-w-full pt-4">
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Name (brand/generic)"
              />
              <Input />
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="Manufacturer"
                />
                <Input />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={true}
                  description="Batch No./Lot No."
                />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="Exp. Date"
                />
                <DatePicker className="w-full"/>
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={true}
                  description="Dose used"
                />
                 <Input addonAfter={"kgs"} />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={true}
                  description="Route used"
                />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="IP/OP"
                />
                <Input />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={true}
                  description="Unit"
                />
                <Input />
              </div>
            </div>
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Frequency (OD, BD)"
              />
              <Input />
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="Date started"
                />
                <DatePicker className="w-full" />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={true}
                  description="Date stopped"
                />
                <DatePicker className="w-full" />
              </div>
            </div>
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Indication"
              />
              <Input />
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
