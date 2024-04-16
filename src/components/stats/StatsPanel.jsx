import getRandomStatsIcon from '../../utils/getRandomStatsIcon'

// eslint-disable-next-line react/prop-types
const StatsPanel = ({ data, featureCount }) => {

    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                data && data.map((item, i) => (

                    <div className="stat" key={i + 1}>
                        <div className="stat-figure text-primary">
                            {getRandomStatsIcon()}
                        </div>
                        <div className="stat-title">{item.value}</div>
                        <div className="stat-value max-sm:font-medium max-md:text-xl text-primary">{item.count}</div>
                        <div className="stat-desc truncate">{item.count === 0 ? 'No available data' : <p className='truncate'>...% more than last month</p>}</div>
                        {/* <div className="stat-value text-primary">{selectedCategory !== '' && item.value === selectedCategory ? featureCount : item.count}</div> */}
                        {/* <div className="stat-desc">{item.count === 0 ? 'No available data' : '...% more than last month'}</div> */}
                    </div>
                ))
            }

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <div className="avatar">
                        <div className="w-16 max-sm:w-12 rounded-full">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path d="M144.4 208c0-17.7 14.3-32 32-32 17.6 0 32 14.3 32 32s-14.4 32-32 32c-17.7 0-32-14.3-32-32zm224 0c0 17.7-14.4 32-32 32-17.7 0-32-14.3-32-32s14.3-32 32-32c17.6 0 32 14.3 32 32zM328 328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h144zm184-72c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="stat-value max-sm:font-medium max-md:text-xl">{featureCount}</div>
                <div className="stat-title">Total</div>
                <div className="stat-desc text-secondary">Face Neutral</div>
            </div>
        </>
    )
}

export default StatsPanel