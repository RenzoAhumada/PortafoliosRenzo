import { useInView } from "framer-motion"

const Animation = () => {
  return (
    function Carousel() {
        const container = useRef(null)
        const ref = useRef(null)
        const isInView = useInView({ root: container })
        
        return (
          <div ref={container} style={{ overflow: "scroll" }}>
            <div ref={ref} />
          </div>
        )
      }
  )
}

export default Animation