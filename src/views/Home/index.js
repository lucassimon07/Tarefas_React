import React, {useState} from 'react';
import * as S from './styles';

//COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  const [filterAcived, setFilterActived] = useState('today');
  return (
    <S.Container>
      <Header />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterAcived == 'all'} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterAcived == 'today'} />
        </button >
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterAcived == 'week'}  /> 
        </button >
        <button type="button" onClick={() => setFilterActived("month")} >
          <FilterCard title="Mês" actived={filterAcived == 'month'} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
        <FilterCard title="Ano" actived={filterAcived == 'year'}  />
        </button>
      </S.FilterArea>

      <S.Content>

        <S.Title>
          <h3>TAREFAS</h3>
        </S.Title>

        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.Content>
      

      <Footer />
    </S.Container>
  );
}

export default Home;
