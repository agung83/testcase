import { memo } from "react"

const Pagination = ({ totalPages, paginate, Page }) => {
    console.log('render pagination')
    // console.log(MinPaging)
    // console.log(MaxPaging)
    const paging = []

    for (let i = 1; i < totalPages + 1; i++) {
        paging.push(i)
    }

    return (

        <div>
            <nav className="relative z-0 inline-flex  rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span className="sr-only">Previous</span>
                    Previouss
                </a>
                {
                    paging.slice(0, 4 + Page).map(number => {
                        return (
                            <button

                                key={number}
                                onClick={() => {
                                    paginate(number)
                                }}

                                className={
                                    Page === number ?
                                        'z-10 bg-red-100 border-red-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                        :
                                        'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                                }
                            >
                                {number}
                            </button>
                        )
                    })
                }
                <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span className="sr-only">Next</span>
                    Next
                </a>
            </nav>

        </div>
    )
}


export default memo(Pagination)




