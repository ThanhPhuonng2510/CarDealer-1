

const TableUser = () => {
return(
    <div className="flex flex-col pt-24 inline-block w-50 sm:px-6 lg:px-8">
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="w-40 float-right inline-block mb-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >Thêm Thành Viên
        </button>
        <div className="overflow-hidden">
            <table className="min-w-full">
                <thead className="border-b bg-gray-800">
                <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Id
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Họ
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Tên
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Tên đăng nhập
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Email
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Số điện thoại
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Role
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jacob
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @fat
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Larry
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Wild
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @twitter
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
}
export default TableUser;