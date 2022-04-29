import React from 'react';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={iconDefault} alt="Ícone da tarefa" />
        <h3>Título da tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>15/05/2022</strong>
        <span>15:00</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
