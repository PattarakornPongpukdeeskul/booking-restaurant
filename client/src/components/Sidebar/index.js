import { Style } from './style'
import { ReactComponent as IconPlace } from '../../asset/svg/icon-place.svg'

export const Sidebar = () => {
  return (
    <Style>
      <div className="sidebar">
        <div className="place">
          <IconPlace />
        </div>
      </div>
    </Style>
  )
}
