const getAppLogos = async (): Promise<any> => {
    const result = await import('./targetAi')
    // let result: any
    // switch (import.meta.env.VITE_THEME || 'targetAi') {
    //     case 'beeline':
    //         result = await import('img/logos/beeline')
    //         break
    //     case 'targetAi':
    //         result = await import('img/logos/targetAi')
    //         break
    //     default:
    //         result = await import('img/logos/targetAi')
    //         break
    // }
    console.log('result', result)
    return result
}

export const { SmallCompanyLogo} =
    await getAppLogos()
