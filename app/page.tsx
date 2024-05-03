"use client"

import React, { useState } from 'react';
import RootLayout from './layout'
import FeedCards from '../components/cards/FeedCards'

export default function Page() {

    return (
        <RootLayout>
            <h1 className="text-center text-4xl font-black my-4">Newslatter Name</h1>
            <p className="text-center text-xl mb-8">Short newslatter description</p>
            <FeedCards />
        </RootLayout>
    )
}