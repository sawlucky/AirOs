import React, { useState } from "react";
// import { Accordion, AccordionItem } from "@heroui/react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FrequentlyAsked = () => {
  const [questions, setQuestions] = useState([
    {
      title: "1. How can I listen to the radio?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      title: "2. Is the radio free to listen to?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "3. Do I need to create an account?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "4. Can I chat with other listeners?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "5. How can I contact you?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ]);

  return (
    <div className="bg-[#122] w-full min-h-screen flex flex-col items-center justify-center py-10">
      {/* Title */}
      <div className="text-white text-4xl font-bold font-['Nunito Sans'] leading-[58.67px] tracking-wide px-6 py-3">
        📻 Frequently Asked
      </div>

      {/* Accordion Wrapper */}
      {/* <div className="w-[800px] flex flex-col items-center justify-center mt-12 p-4 rounded-lg">
        {questions.map((ques, index) => (
          <Accordion key={index} className="m-2">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component="span">{ques.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{ques.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div> */}
      <div className="w-[800px] flex flex-col items-center justify-center mt-12 p-4 rounded-lg ">
        {questions.map((ques, index) => (
          <Accordion key={index} className="w-full my-2 rounded-lg">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="p-4 rounded-lg"
            >
              <Typography component="span" className="font-semibold text-lg">
                {ques.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="p-4 bg-white rounded-lg">
              <Typography>{ques.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
