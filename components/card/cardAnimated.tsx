'use client'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Card } from './card'

interface CardProps {
  name: string
  image: string
}

export const CardAnimated = ({ name, image }: CardProps): JSX.Element => {
  const cardRef = useRef(null)

  const cardWidth = cardRef.current ? cardRef.current.innerWidth : 2
  const cardHeight = cardRef.current ? cardRef.current.innerHeight : 2

  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? cardWidth / 2 : 0
  )
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? cardHeight / 2 : 0
  )

  const dampen = 40
  const rotateX = useTransform(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateX = newMouseY - rect.top - rect.height / 2
    return -newRotateX / dampen
  })
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateY = newMouseX - rect.left - rect.width / 2
    return newRotateY / dampen
  })

  const diagonalMovement = useTransform(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]: [number, number]) => {
      const position = newRotateX + newRotateY
      return position
    }
  )
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200])
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  )
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    transparent,
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    transparent)`

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX)
      animate(mouseY, e.clientY)
    }
    if (typeof window === 'undefined') return
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-96 h-96 overflow-hidden perspective-1000 m-4 ">
      <motion.div
        className="w-full h-full
        flex flex flex-col justify-center items-center 
        transform-style preserve-3d"
        style={{ rotateX, rotateY }}
      >
        <motion.div
          ref={cardRef}
          className="rounded-lg w-64 h-72
            backdrop-filter-blur-4 backdrop-brightness-120           
            border-4 border-purple-light shadow-2xl shadow-black"
          style={{ backgroundImage: sheenGradient }}
        >
          <Card name={name} image={image} />
        </motion.div>
      </motion.div>
    </div>
  )
}
