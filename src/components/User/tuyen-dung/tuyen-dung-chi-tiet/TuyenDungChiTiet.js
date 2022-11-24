import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TuyenDungChiTiet() {
  const [detail, setDetail] = useState([])
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://hhq.somee.com/api/recruit/` + id)
    .then(res => res.json())
    .then((data) => {
      setDetail(data.data)
    })
  }, [])
  return (
    <div>
      {detail.isHot}
    </div>
  )
}

export default TuyenDungChiTiet;