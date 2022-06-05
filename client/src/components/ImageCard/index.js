import { useRecoilValue } from 'recoil'

import { Style } from './style'
import { placeSelectedId, restaurantListState } from '../../recoil/atom'

export const ImageCard = () => {
  const restaurantList = useRecoilValue(restaurantListState)
  const selectedIdPlace = useRecoilValue(placeSelectedId)
  const place = restaurantList.filter((place) => place.id === selectedIdPlace)
  const images = place[0].images || []

  return (
    <Style>
      <div className="image-card">
        <div className="title">images</div>
        <div className="image-group">
          {images.map((image, index) => {
            return <img className="image" src={image} alt="" key={`${index}-image`} />
          })}
        </div>
      </div>
    </Style>
  )
}
