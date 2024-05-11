import React from "react";

export default function CheckoutPage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-12 py-8">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center">Cool</h1>
        </div>
        <div className="flex justify-center">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                <td className="px-6 py-4 whitespace-nowrap">$10.00</td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$20.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Product B</td>
                <td className="px-6 py-4 whitespace-nowrap">$15.00</td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">$15.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td
                  className="px-6 py-4 text-left text-sm font-medium"
                  colSpan={3}
                >
                  Total
                </td>
                <td className="px-6 py-4 text-left text-sm font-medium">
                  $35.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
