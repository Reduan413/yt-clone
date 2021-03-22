import React, { useEffect } from 'react'
import { Container, Col} from 'react-bootstrap'
import Video from '../../components/video/Video'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideoByCategory } from '../../redux/actions/video.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'

const HomeScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    
    const {videos,activeCategory, loading} = useSelector(state=>state.homeVideos)

    const fetcData =()=>{
        if(activeCategory === "All"){
            dispatch(getPopularVideos())
        }else{
            dispatch(getVideoByCategory(activeCategory))
        }
    }

    return (
        <Container>
            <CategoriesBar/>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetcData}
                    hasMore={true}
                    loader={
                        <div className='spinner-border text-danger d-block mx-auto'></div>
                     }
                    className='row'>
                    {!loading ? videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id}/>
                            </Col>
                    ))
                    : [...Array(20)].map(() => (
                        <Col lg={3} md={4}>
                                <SkeletonVideo/>
                            </Col> 
                    ))}  
                </InfiniteScroll>     
        </Container>
    )
}

export default HomeScreen
