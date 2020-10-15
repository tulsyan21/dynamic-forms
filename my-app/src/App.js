import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import './styles/styles.scss';

import QuestionWrapper from './components/QuestionWrapper.jsx';
import OneLine from './components/OneLine.jsx';
import TitleAndContent from './components/TitleAndContent';

function App() {
  const [skillField, setSkillField] = useState([
    { skills: '' },
  ]);
  const [strengthField, setStrengthField] = useState([
    { strengths: '' },
  ]);
  const [attentionField, setAttentionField] = useState([
    { attentions: '' },
  ]);
  const [accomField, setAccomField] = useState([
    { title: '' , content: ''},
  ]);
  const [subjectField, setSubjectField] = useState([
    { subname:'', title: '' , content: ''},
  ]);

  return (
    <Container>
      <p>Add skills to be worked upon:</p>
      <QuestionWrapper>
        {
          skillField.map((skill, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={skillField}
              setField={setSkillField}
              name="skills"
              placeholder="Add new skill"
            />
          ))
        }
      </QuestionWrapper>
      <p>Add areas of strength:</p>
      <QuestionWrapper>
        {
          strengthField.map((object, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={strengthField}
              setField={setStrengthField}
              name="strengths"
              placeholder="Add new area of strength"
            />
          ))
        }
      </QuestionWrapper>
      <p>Add areas of attention:</p>
      <QuestionWrapper>
        {
          attentionField.map((object, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={attentionField}
              setField={setAttentionField}
              name="attentions"
              placeholder="Add new area of attention"
            />
          ))
        }
      </QuestionWrapper>
      <p>Add areas of accomodation:</p>
      <QuestionWrapper>
        {
          accomField.map((object, idx) => (
            <TitleAndContent 
              key={idx} 
              index={idx} 
              field={accomField}
              setField={setAccomField}
              name="title"
              placeholder="Add new area of accomodation"
            />
          ))
        }
      </QuestionWrapper>
      <p>Add subjects:</p>
      <QuestionWrapper>
      {
          subjectField.map((object, idx) => (
            <OneLine 
              key={idx} 
              index={idx} 
              field={subjectField}
              setField={setSubjectField}
              name="subname"
              placeholder="Add new subject"
            />
          ))
      }
      </QuestionWrapper>
      <QuestionWrapper>
      {    
        subjectField.map((object, idx) => (  
            <TitleAndContent 
              key={idx} 
              index={idx} 
              field={subjectField}
              setField={setSubjectField}
              name="title"
              placeholder="Title and content"
            />
          ))
        }
      </QuestionWrapper>
    </Container>
  );
}

export default App;
