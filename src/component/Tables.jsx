import React from 'react'

function Tables() {
  return (
    <div className=" w-full lg:max-w-[950px] ">
          <div className="min-w-full mt-5  bg-white rounded-lg overflow-hidden">
           
            <div className="grid grid-cols-4 bg-[#E1F0FF] border-b border-[#E1CFFF]">
              <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Ticket ID</div>
              <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Title</div>
              <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Company</div>
              <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Created Date</div>
            </div>

           
            <div className="divide-y divide-[#E1CFFF]">
           
              <div className="grid grid-cols-4">
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">#13245</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Title</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Customer</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Date</div>
              </div>

              <div className="grid grid-cols-4">
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">#13246</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Title</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Customer</div>
                <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Date</div>
              </div>
            </div>
          </div>

          <div className="min-w-full mt-5 bg-white rounded-lg overflow-hidden">
              
              <div className="grid grid-cols-4 bg-[#E1F0FF] border-b border-[#E1CFFF]">
                <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Task ID</div>
                <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Title</div>
                <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Created Date</div>
                <div className="px-6 py-3 text-left text-[#0F1419] font-medium text-sm">Due Date</div>
              </div>

           
              <div className="divide-y divide-[#E1CFFF]">
             
                <div className="grid grid-cols-4">
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">#13245</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Title</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Customer</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Date</div>
                </div>

              
                <div className="grid grid-cols-4">
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">#13246</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Title</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Customer</div>
                  <div className="px-6 py-3 text-left text-[#212121] font-normal text-sm">Date</div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Tables


