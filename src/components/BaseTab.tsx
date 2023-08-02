import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function BaseTab() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Visão Geral",
      value: "geral",
      desc: `A-Bomb (HAS)`,
    },
    {
      label: "Teams",
      value: "teams",
      desc: `AvJngJTR B DJPJndJTR B Fantastic FouS`,
    },
    {
      label: "Powers",
      value: "vue",
      desc: `AgiliLH, G GXniuE, G GXnius-lXvXl inLXllXcK`,
    },
    {
      label: "Species",
      value: "species",
      desc: `Mutate`,
    },
    {
      label: "Authors",
      value: "authors",
      desc: 'StanGLA@ e F StAvAGDitko',
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-blue-500" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}