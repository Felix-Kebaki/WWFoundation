import React, { useState } from "react";
import { QandA } from "../../constants";
import "./question.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export function QandAnswers() {
  const [show, setShow] = useState(0);

  const HandleShow = (id) => {
    setShow(id);
    if (show === id) {
      setShow(0);
    }
  };
  return (
    <section className="QuestionAndAnswerMainSec">
      <div className="QuestionAndAnswerMainDiv">
        <p className="QuestionAndAnswerIntroTitle italics">
          Frequently asked questions
        </p>
        <div className="QuestionAndAnswerActualDiv">
          {QandA &&
            QandA.map((q) => (
              <div key={q.id} className="InsideQuestionAndAnswerActualDiv">
                <div onClick={() => HandleShow(q.id)} className="HeaderOrQuestionDiv medium">
                  <p>{q.question}</p>
                  <FontAwesomeIcon
                    icon={show === q.id ? faAngleUp : faAngleDown}
                  />
                </div>
                {show === q.id ? (
                  <div>
                    <p className="AnswerToQuestion regular">{q.answer}</p>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
