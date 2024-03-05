import type { FC } from 'react'
import { memo } from 'react'
import { useWorkflow } from '../../../hooks'
import {
  DotsHorizontal,
  Loading02,
} from '@/app/components/base/icons/src/vender/line/general'
import {
  Play,
  Stop,
} from '@/app/components/base/icons/src/vender/line/mediaAndDevices'

type NodeControlProps = {
  isRunning?: boolean
  nodeId: string
}
const NodeControl: FC<NodeControlProps> = ({
  isRunning,
  nodeId,
}) => {
  const { handleNodeDataUpdate } = useWorkflow()

  return (
    <div className='absolute right-0 -top-7 flex items-center px-0.5 h-6 bg-white rounded-lg border-[0.5px] border-gray-100 shadow-xs text-gray-500'>
      {
        isRunning && (
          <div className='flex items-center px-1 h-5 rounded-md bg-primary-50 text-xs font-medium text-primary-600'>
            <Loading02 className='mr-1 w-3 h-3 animate-spin' />
            RUNNING
          </div>
        )
      }
      <div
        className='flex items-center justify-center w-5 h-5 rounded-md cursor-pointer hover:bg-black/5'
        onClick={() => {
          handleNodeDataUpdate({
            id: nodeId,
            data: { _isSingleRun: !isRunning },
          })
        }}
      >
        {
          isRunning
            ? <Stop className='w-3 h-3' />
            : <Play className='w-3 h-3' />
        }
      </div>
      <div className='flex items-center justify-center w-5 h-5 rounded-md cursor-pointer hover:bg-black/5'>
        <DotsHorizontal className='w-3 h-3' />
      </div>
    </div>
  )
}

export default memo(NodeControl)
