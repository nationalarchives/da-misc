javascript:(function()%7Bjavascript%3A%20(()%20%3D%3E%20%7B%0A%20%20%20%20const%20V1_PATH%20%3D%20'%2Fexplorer%2Fexplorer.html%23'%3B%0A%20%20%20%20const%20V2_PATH%20%3D%20'%2Fstarter%2Fexplorer'%3B%0A%20%20%20%20let%20currentUrl%20%3D%20window.location.href%3B%0A%20%20%20%20if%20(!currentUrl.includes('preservica.com'))%20return%3B%0A%20%20%20%20const%20urlBase%20%3D%20currentUrl.split('%2F').slice(0%2C%203).join('%2F')%3B%0A%20%20%20%20const%20entityRef%20%3D%20currentUrl.match(%2FIO(%257C%7C%26)%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%2F)%3F.%5B0%5D%20%7C%7C%20currentUrl.match(%2FSO(%257C%7C%26)%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%2F)%3F.%5B0%5D%3B%0A%20%20%20%20const%20isSO%20%3D%20entityRef%3F.startsWith('SO')%3B%0A%20%20%20%20let%20newUrl%20%3D%20urlBase%3B%0A%20%20%20%20if%20(currentUrl.includes(V2_PATH))%20%7B%0A%20%20%20%20%20%20%20%20newUrl%20%2B%3D%20V1_PATH%3B%0A%20%20%20%20%20%20%20%20if%20(entityRef)%20newUrl%20%2B%3D%20%60%24%7BisSO%20%3F%20'browse'%20%3A%20'properties'%7D%3A%24%7BentityRef.replace('%257C'%2C%20'%26')%7D%60%3B%0A%20%20%20%20%7D%20else%20if%20(currentUrl.includes(V1_PATH))%20%7B%0A%20%20%20%20%20%20%20%20newUrl%20%2B%3D%20V2_PATH%3B%0A%20%20%20%20%20%20%20%20if%20(entityRef)%20newUrl%20%2B%3D%20isSO%20%3F%20%60%2Fsdb%3A%24%7BentityRef.replace('%26'%2C%20'%257C')%7D%60%20%3A%20%60%3FassetReport%3Dsdb%3A%24%7BentityRef.replace('%26'%2C%20'%257C')%7D%60%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20location.href%20%3D%20newUrl%3B%0A%7D)()%3B%7D)()%3B
