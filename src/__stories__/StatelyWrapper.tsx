import React from 'react'
import Stately, { StatelyController } from '@1productaweek/react-stately'
import 'antd/dist/antd.css'

export interface StatelyWrapperProps {
  children: React.ReactNode
}

export default function StatelyWrapper ({ children }: StatelyWrapperProps) {
  return (
    <div style={{ padding: '1em' }}>
      <Stately>
        {(stately: StatelyController) => (
          <>
            {children}
            <code style={{ marginTop: '1em', display: 'block' }}>
              <pre>
                {JSON.stringify(stately.value, null, 2)}
              </pre>
            </code>
          </>
        )}
      </Stately>
    </div>
  )
}
