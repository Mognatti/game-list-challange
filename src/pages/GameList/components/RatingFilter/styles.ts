import styled, { css, keyframes } from "styled-components";
import { BsStarFill, BsArrowUp } from "react-icons/bs";
import { pallete, palleteOpacity } from "../../../../styles/styleVariables";

const starFillAnimation = keyframes`
  0%{
    fill: transparent;
    stroke-dasharray: 60;
}  
40%{
    stroke-dasharray: 34 ;
  }
  60%{
    stroke-dasharray: 12;
  }
  80%{
    stroke-dasharray: 34;
  }
  85%{
  fill: transparent; ; 
}
95%{
    stroke-dasharray: 56;
}
100%{
    stroke: ${pallete.yellow};
    fill: ${pallete.yellow};
}

`;
const starEmptyAnimation = keyframes`
  0%{
    fill: ${pallete.yellow};
    stroke-width: 1px;
} 

10%{     
    fill:${pallete.yellow}${palleteOpacity.half};
    stroke:${pallete.yellow}${palleteOpacity.half}

}

20%{     
    fill:${pallete.yellow};
    stroke:${pallete.yellow}

}

30%{     
    fill:${pallete.yellow}${palleteOpacity.half};
    stroke:${pallete.yellow}${palleteOpacity.half}

}

35%{     
    fill:${pallete.yellow}${palleteOpacity.third};
    stroke:${pallete.yellow}${palleteOpacity.third}

}

40%{     
    fill:${pallete.yellow}${palleteOpacity.half};
    stroke:${pallete.yellow}${palleteOpacity.half}

}

70%{
  fill: ${pallete.yellow}${palleteOpacity.third};
  stroke:${pallete.yellow}${palleteOpacity.third}

}
90%{
  stroke:${pallete.yellow}${palleteOpacity.third}
}
100%{
    stroke-width:1px ;
    stroke: ${pallete.yellow};
    fill: transparent;
    }
`;
const EmptyStar = css`
  animation: ${starEmptyAnimation} 1500ms linear forwards;
`;
const FillStar = css`
  animation: ${starFillAnimation} 2s linear forwards;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const SortButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
`;
export const ArrowUp = styled(BsArrowUp)<{ rotate: boolean }>`
  transition: 500ms ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(0)" : "rotate(180deg)")};
`;

export const SortHigher = styled(BsStarFill)`
  & path {
    stroke: ${pallete.yellow};
    fill: ${pallete.yellow};
    stroke-width: 1px;
    transition: 350ms;
    cursor: pointer;
    ${FillStar}
  }
`;

export const SortLower = styled(BsStarFill)`
  & path {
    stroke: ${pallete.yellow};
    fill: transparent;
    stroke-width: 1px;
    transition: 350ms;
    cursor: pointer;
    ${EmptyStar}
  }
`;
