/**
 * Copyright (c) Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar, linesVector } from '@kernel/common'
import AppConfig from 'App.config'

import celoLogo from 'assets/images/celo.png'
import ipfsLogo from 'assets/images/ipfs.png'
import graphLogo from 'assets/images/the-graph.jpg'

const Wallet = () => {
  return (
    <div>
      <Navbar
        title={AppConfig.appTitle}
        logoUrl={AppConfig.logoUrl}
        menuLinks={AppConfig.navbar?.links}
        backgroundColor='bg-kernel-dark' textColor='text-kernel-white'
      />
      <main>
        <div className='relative'>
          <div className='hidden lg:block lg:fixed lg:-top-24 lg:-left-52 lg:z-0'>
            <img alt='kernel fingerprint' src={linesVector} width={383} height={412} />
          </div>
          <div className='hidden lg:block lg:fixed lg:-top-12 lg:-right-52 lg:z-0'>
            <img alt='kernel fingerprint' src={linesVector} width={442} height={476} />
          </div>
        </div>
        <div className='lg:px-64 md:px-12 px-12 py-20'>
          <div className='font-heading lg:text-7xl text-5xl text-primary lg:py-5'>
            Welcome to Kernel.
          </div>
          <div className='font-secondary text-lg text-kernel pt-12'>
            <Link to='/register'>
              <span className='pr-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-kernel-highlight relative inline-block cursor-pointer'>
                <span className='relative text-primary'>
                  <span className='underline decoration-dotted'>
                    Create a wallet
                  </span>
                </span>
              </span>
            </Link>
            &nbsp;or&nbsp;
            <Link to='/portal'>
              <span className='pl-2 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-kernel-yellow-light relative inline-block cursor-pointer'>
                <span className='relative text-primary'>
                  <span className='underline decoration-dotted'>
                    log back in
                  </span>.
                </span>
              </span>
            </Link>
          </div>
          <div className='pt-40 font-secondary'>
            <div className='columns-1 md:columns-2'>
              <div className='p-10 border rounded-md border-kernel-dark float-left mb-10 md:mb-0'>
                <h2 className='font-heading text-3xl text-primary pb-6'>Learn</h2>
                <p>
                  This is a <strong>non-custodial wallet</strong>. It's OK if you're not sure what that means. Kernel is an open source learning community, and we're here to help each other <strong>understand</strong> and use our own <strong>keys</strong> to unlock doors to ever richer, <strong>shared</strong> truths.
                </p>
              </div>
              <div className='p-10 border rounded-md border-kernel-dark float-left mb-10 md:mb-0'>
                <h2 className='font-heading text-3xl text-primary pb-6'>Play</h2>
                <p>
                  We call this a <strong>portal</strong> because it is about so much more than money. When we set out to learn together, rather than represent your "worth" with one number, we can discover much more <strong>wholesome</strong> ways of seeing and being.
                </p>
              </div>
            </div>
            <div className='pt-20'>
              <h1 className='font-heading text-5xl text-primary pb-6'>Help Us Help Each Other</h1>
              <p className='pb-10'>
                Non-custodial means that you care for your keys, no-one else. Caring for our own keys empowers us, and it makes us <strong>responsible</strong>. That can be a lot to handle on your own, which is why we create open tools for communities of care. Our <strong>portal</strong> will help you:
              </p>
              <ol className='list-decimal pl-10 pb-10 decoration-kernel-dark'>
                <li className='p-2'>
                  <strong>learn</strong> about blockchains and "web3"
                </li>
                <li className='p-2'>
                  <strong>understand</strong> how cryptocurrency works
                </li>
                <li className='p-2'>
                  <strong>connect</strong> with others who can help you learn even more.
                </li>
              </ol>
              <p>
                Finally, it will show you how to free money, giving back to the community who have made this gift possible.
              </p>
            </div>
            <div className='pt-20'>
              <h1 className='font-heading text-5xl text-primary pb-6'>Good For The Public</h1>
              <div className='font-secondary'>
                <div className='columns-1 mb-20 md:columns-2'>
                  <div className='p-10 border rounded-md border-kernel-dark float-left mb-10 md:mb-0'>
                    <h2 className='font-heading text-3xl text-primary pb-6'>For Everyone</h2>
                    <p>
                      Anyone may use and extend this <strong>portal</strong>: it is a public gift. We wish to help demonstrate that "wallets" need not compromise your security, limit you to one network at a time, or sell your data to JP Morgan and friends.
                    </p>
                  </div>
                  <div className='p-10 border rounded-md border-kernel-dark float-left mb-10 md:mb-0'>
                    <h2 className='font-heading text-3xl text-primary pb-6'>For Kernel</h2>
                    <p>
                      If you're a Kernel Fellow, then this portal will take you to many more places. Your keys are used not just to sign transactions, but to grant you access to other Fellows, their adventures, and the various events <strong>unique</strong> to our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-20'>
              <h1 className='font-heading text-5xl text-primary pb-6'>A Community of Care</h1>
              <div className='font-secondary'>
                <p className='pb-10'>
                  At Kernel, we really care about
                  <a className='px-2' href='https://www.kernel.community/en/conversation/reciprocity' target='_blank' rel='noreferrer'>
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-kernel-highlight relative inline-block cursor-pointer'>
                      <span className='relative text-primary'>
                        <span className='underline decoration-dotted'>
                          reciprocity.
                        </span>
                      </span>
                    </span>
                  </a>
                </p>
                <p>
                  Here are a few of the founding fun-ders who both make this work possible, and benefit from an open source, non-custodial portal that makes their contracts or technology accessible without relying on their own web interfaces.
                </p>
                <div className='columns-1 mb-20 sm:columns-2 md:columns-3 lg:columns-4'>
                  <div className='py-10 float-left sm:pr-2'>
                    <img className='max-h-[100px]' alt='supporter-logo' src={ipfsLogo} />
                  </div>
                  <div className='py-10 float-left sm:pr-2'>
                    <img className='max-h-[100px]' alt='supporter-logo' src={celoLogo} />
                  </div>
                  <div className='py-10 float-left sm:pr-2'>
                    <img className='max-h-[100px]' alt='supporter-logo' src={graphLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Wallet
