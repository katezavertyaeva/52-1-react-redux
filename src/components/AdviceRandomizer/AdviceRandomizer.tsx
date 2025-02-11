import { v4 } from "uuid";

import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import { AdviceCard, AdviceContainer, AdviceRandomizerWrapper, AdviceText, Error } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { adviceRandomizeActions, adviceRandomizeSelectors } from "store/redux/adviceRandomizer/adviceRandomizerSlice";

function AdviceRandomizer() {
  const { data, error, status } = useAppSelector(adviceRandomizeSelectors.adviceData)
  const dispatch = useAppDispatch();

  const advices = data.map((advice: string) => {
    return <AdviceText key={v4()}>{advice}</AdviceText>
  })

  const getAdvice = () => {
    dispatch(adviceRandomizeActions.getAdvice())
  }

  const deleteAdvices = () => {
    dispatch(adviceRandomizeActions.deleteAdvices())
  }

  const isLoading: boolean = status === 'loading';

  return (
    <AdviceRandomizerWrapper>
      <AdviceCard>
        <Button name='GET ADVICE' onClick={getAdvice} disabled={isLoading} />
        {status==='error' && <Error>{error}</Error>}
        {isLoading && <Spinner />}
        <AdviceContainer>
          {advices}
        </AdviceContainer>
        {data.length !== 0 && <Button name='Delete All Advices' onClick={deleteAdvices} />}
      </AdviceCard>
    </AdviceRandomizerWrapper>
  )
}

export default AdviceRandomizer;