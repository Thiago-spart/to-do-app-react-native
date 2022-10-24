import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const VectorSvg = (props: SvgProps) => {
  return (
    <Svg
      width={10}
      height={7}
      viewBox="0 0 10 7"
      fill="none"
      {...props}
    >
      <Path
        d="M8.431.342L4.1 4.674 1.617 2.192l-.836.835 3.318 3.319 5.168-5.168-.836-.836z"
        fill="#F2F2F2"
      />
    </Svg>
  )
}
