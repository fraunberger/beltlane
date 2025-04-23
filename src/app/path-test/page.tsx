'use client';

import React from 'react';
import Nav from "@/components/Nav";
import PathFilterMethod from "@/components/PathFilterMethod";
import PathClipMethod from "@/components/PathClipMethod";
import PathScaleMethod from "@/components/PathScaleMethod";

export default function PathTestPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col bg-background text-text font-sans pt-16">
        <div className="max-w-6xl mx-auto w-full p-4">
          <h1 className="text-3xl font-bold mb-6 text-center mt-4">Path Offset Comparison</h1>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            This page demonstrates three different SVG techniques for creating uniform path offsets, 
            each with its own advantages and limitations.
          </p>
          
          <div className="grid grid-cols-1 gap-12 mb-12">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <PathFilterMethod />
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <PathClipMethod />
            </div>
            
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <PathScaleMethod />
            </div>
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Comparison of Techniques</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Method</th>
                  <th className="border p-2 text-left">Pros</th>
                  <th className="border p-2 text-left">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">SVG Filter Method</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>True path expansion/contraction</li>
                      <li>Works with any path shape</li>
                      <li>Maintains path integrity</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Lower performance</li>
                      <li>May have rendering issues in some browsers</li>
                      <li>Limited control over offset direction</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Stroke Width Method</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Simple implementation</li>
                      <li>Good performance</li>
                      <li>Uniform offset around path</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Limited to filled shapes with clipping</li>
                      <li>Can look jagged at sharp corners</li>
                      <li>Less control over appearance</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Scale Transform Method</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Simple and intuitive</li>
                      <li>Works well for centered paths</li>
                      <li>Great performance</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Non-uniform offset (depends on shape)</li>
                      <li>Distortion for complex shapes</li>
                      <li>Requires centered paths for best results</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
} 