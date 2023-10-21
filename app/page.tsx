import TopBar from '@/components/appBar/top-bar'
import { ModeToggle } from '@/components/mode-toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg">
        <TopBar />
        <div className="w-full mt-5 text-center">
          Looking out for a new career opportunity?
          <br />
          Check out the jobs listed below and apply for the ones which match your skills.
        </div>
      </div>
    </main>
  )
}
